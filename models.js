var Account=Backbone.Model.extend({
	initialize: function(data,options){
		options.remote.account(data.id)
			.on('lines',this.lines)
			.on('entry',this.entry)
			.on('transaction',this.transaction)
			.on('balance',this.balance);
		// remote.requestWalletAccounts(account,walletListener);
		// remote.requestAccountInfo(account,accountListener);
		// remote.requestAccountCurrencies(account,currenciesListener);
		// remote.requestAccountBalance('rEX2Q18vQziVAJoiLwoVHN5u87CXm29LCQ',balanceListener)
	    // account.getInfo(accountListener);
	},
	parse: function(response,options){
		return {
			id: response
		}
	},
	lines: function(lines){
		console.log("lines",this,lines);
	},
	entry: function(entry){
		console.log("entry",this,entry);
	},
	transaction: function(tx){
		console.log("transaction",this,tx);
	},
	balance: function(balance){
		console.log("balance",this,balance);
	}
});

var Accounts=Backbone.Collection.extend({
	model: Account
});

var Trade=Backbone.Model.extend({
});

var Order=Backbone.Model.extend({
	initialize: function(data,options){
		this.flip=options.flip;
	},
	parse: function(response,options){
		var pays=ripple.Amount.from_json(response.TakerPays);
		var paysFunded=ripple.Amount.from_json(response.taker_pays_funded).ratio_human(gets);
		var gets=ripple.Amount.from_json(response.TakerGets);
		var getsFunded=ripple.Amount.from_json(response.taker_gets_funded).ratio_human(pays);
		var price=options.flip?gets.divide(pays):pays.divide(gets);
		var amount=options.flip?pays:gets
		return _.extend(response,{
			price 		: price,
			amount 		: amount,
			funded 		: options.flip?getsFunded:paysFunded
		});
	},
	sum: function(){
		if (_.isUndefined(this._sum)){
			var previous=this.collection.at(this.collection.indexOf(this) + (this.flip?-1:1));
			var amount=this.get("amount");
			this._sum= _.isUndefined(previous)?amount:previous.sum().add(amount);
		}
		return this._sum;
	}
});

var Trades=Backbone.Collection.extend({
	model: Trade
});

var Orders=Backbone.Collection.extend({
	model: Order,
	comparator: function(a,b){
		if (a.get("price").equals(b.get("price"))){
			return 0;
		}
		return a.get("price").subtract(b.get("price")).is_negative()?1:-1;
	},
	initialize: function(models,options){
		this.flip=options.flip;
		options.remote.book.apply(options.remote,options.sub)
			.on('model',_.bind(this.update,this))
    		.on('trade',_.bind(this.trade,this))
    		.on('transaction',_.bind(this.transaction,this));
	},
	top: function(n){
		return this.flip?this.first(n):this.last(n);
	},
	update: function(models){
		this.reset(models,{parse:true,flip:this.flip});
	},
	trade: function(paid,got){
		if (paid.is_valid() && got.is_valid()){
			this.trigger("trade",new Trade({
				type 	: this.flip?"bid":"ask",
				price 	: this.flip?got.divide(paid):paid.divide(got),
				amount 	: this.flip?paid:got
			}));
		}
	},
	transaction: function(tx){
		// tx.mmeta.each(function(node){
		// 	if (node.entryType=="Offer"){
		// 		var transaction={
		// 			account: 	node.fields.Account,
		// 			state: 		node.diffType,
		// 			pays: 		ripple.Amount.from_json(node.fields.TakerPays),
		// 			gets: 		ripple.Amount.from_json(node.fields.TakerGets)
		// 		};
		// 		if (transactions.unshift(transaction)>20){
		// 			transactions.pop();
		// 		};
		// 		console.log(transaction);
		// 	}
		// });
		// console.log("transaction",tx);
	}
});

var Book=Backbone.Model.extend({
	initialize:function(data,options){
		this.get("asks").on('trade',this.onTrade,this);
		this.get("bids").on('trade',this.onTrade,this);
	},
	onTrade: function(trade){
		this.set("tradeCount",this.get("tradeCount")+1);
		if (this.get("trades").unshift(trade)>10){
			this.get("trades").pop();
		}
	},
	parse:function(response,options){
		var pays=ripple.Amount.from_json("0/"+response[0]);
		var gets=ripple.Amount.from_json("0/"+response[1]);
		var sub=[pays.currency().to_json(),pays.issuer().to_json(),gets.currency().to_json(),gets.issuer().to_json()];
		return {
			index 		: response.index,
			pays 		: pays.currency().to_human(),
			gets 		: gets.currency().to_human(),
			issuer		: gets.is_native()?pays.issuer().to_json():gets.issuer().to_json(),
			trades 		: new Trades([]),
			tradeCount 	: 0,
			asks 		: new Orders([],{
				remote 	: options.remote,
				sub		: sub.slice(2,4).concat(sub.slice(0,2)),
				flip	: false
			}),
			bids 		: new Orders([],{
				remote 	: options.remote,
				sub		: sub,
				flip	: true
			})
		}
	},
	summary:function(){
		var lowestAsk=this.get("asks").top();
		var highestBid=this.get("bids").top();
		var summary=this.attributes;
		if (!_.isUndefined(lowestAsk) && !_.isUndefined(highestBid)){
			var ask=lowestAsk.get("price");
			var bid=highestBid.get("price");
			var ratio=ask.subtract(bid).ratio_human(ask);
			_.extend(summary,{
				spread			: ask.subtract(bid),
				spreadPercent   : ratio.is_native()?ratio.to_number()/10000:ratio.to_number()*100
			}) 
		}
		return summary;
	}
});

var Books=Backbone.Collection.extend({
	model: Book,
	comparator: "index",
	parse: function(response,options){
		return _.map(response,function(book,index){
			return _.extend(book,{
				index :index
			});
		})
	},
	byExchange: function(){
		var exchanges=this.chain().groupBy(function(book){
			return book.get("issuer");
		}).map(function(books,issuer){
			return {
				issuer	: issuer,
				markets	: new Books(books)
			}
		}).value();
		return new Exchanges(exchanges);
	}
});

var Exchange=Backbone.Model.extend({

});

var Exchanges=Backbone.Collection.extend({
	model: Exchange,
	comparator: "issuer"
});
