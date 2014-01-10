var nicknames={
	"r4H3F9dDaYPFwbrUsusvNAHLz2sEZk4wE5"	: "ICE",
	"rM8199qFwspxiWNZRChZdZbGN5WrCepVP1"	: "XRP China",
	"rE7CNMbxwvTQrqSEjbcXCrqeN6EZga1ApU"	: "RippleFund",
	"r3ADD8kXSUKHd6zTCKfnKT3zV9EZHjzp1S"	: "Ripple Union",
	"rhR5j5LXsujSuwG2bcn1P39utdTA79ceaW"	: "Dividend Rippler",
	"rfYv1TXnwgDDK4WQNbFALykYuEBnrR4pDX"	: "Dividend Rippler Redeem",
	"rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9"	: "RippleIsrael",
	"rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q"	: "SnapSwap",
	"rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"		: "Bitstamp",
	"razqQKzJRdB4UxFPWf5NEpEG3WMkmwgcXA"	: "RippleChina",
	"rnuF96W4SZoCJmbHYBFoJZpR8eCaxNvekK"	: "RippleCN",
	"rkH1aQbL2ajA7HUsx8VQRuL3VaEByHELm"		: "RippleMoney UK",
	"rPDXxSZcuVL3ZWoyU82bcde3zwvmShkRyF"	: "Wisepass",
	"rJHygWcTLVpSXkowott6kzgZU6viQSVYM1"	: "Snowcoin",
	"rGDWKWni6exeneJdNbEZ3nVX3Rrw5VG1p1"	: "GoodWill",
	"rQ96qm46YsRX2F7SSCQxToR2ybRuUYsZ4R"	: "Dave Chapeskie",
	"rGEDQD48uACC2JFHykNLDPj1LPuU3QsqpV"	: "MikeM",
	"rfbKLd1VLB3o6fpkhCJexckArjoMmBm2wG"	: "JustMoon",
	"rLEsXccBGNR3UPuPu2hUXPjziKC3qKSBun"	: "Rock Trading",
	"rGwUWgN5BEg3QGNY3RX2HfYowjUTZdid3E"	: "DYM",
	"rM3CxdfWgPqjFe6fta7bYTNmTcvfYoXQpC"	: "BlocToc",
	"rJHygWcTLVpSXkowott6kzgZU6viQSVYM1"	: "Justcoin",
	"ra9eZxMbJrUcgV8ui7aPc161FgrqWScQxV"	: "Peercover",
}

var pairs=[
	//Bitstamp
	["XRP","USD/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"],
	["XRP","BTC/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"],
	["XRP","EUR/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"],
	["XRP","AUD/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"],
	["XRP","CHF/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"],
	["XRP","GBP/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"],
	["XRP","JPY/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"],
	["XRP","CAD/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"],
	["USD/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B","BTC/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"],
	["EUR/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B","BTC/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"],
	["EUR/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B","USD/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"],
	["USD/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B","JPY/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"],
	["GBP/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B","USD/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"],
	["AUD/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B","USD/rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"],
	//Ripple Israel
	["XRP","ILS/rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9"],
	["XRP","BTC/rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9"],
	["BTC/rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9","ILS/rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9"],
	["BTC/rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9","LTC/rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9"],
	["LTC/rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9","ILS/rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9"],
	//Snapswap
	["XRP","USD/rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q"],
	//Ripple China
	["XRP","BTC/razqQKzJRdB4UxFPWf5NEpEG3WMkmwgcXA"],
	["XRP","CNY/razqQKzJRdB4UxFPWf5NEpEG3WMkmwgcXA"],
	["XRP","LTC/razqQKzJRdB4UxFPWf5NEpEG3WMkmwgcXA"],
	//RippleCN
	["XRP","BTC/rnuF96W4SZoCJmbHYBFoJZpR8eCaxNvekK"],
	["XRP","CNY/rnuF96W4SZoCJmbHYBFoJZpR8eCaxNvekK"],
	["XRP","LTC/rnuF96W4SZoCJmbHYBFoJZpR8eCaxNvekK"],
	//Peercover
	["XRP","USD/ra9eZxMbJrUcgV8ui7aPc161FgrqWScQxV"],
	["XRP","BTC/ra9eZxMbJrUcgV8ui7aPc161FgrqWScQxV"],
	["XRP","LTC/ra9eZxMbJrUcgV8ui7aPc161FgrqWScQxV"],
	["XRP","NXT/ra9eZxMbJrUcgV8ui7aPc161FgrqWScQxV"],
	["BTC/ra9eZxMbJrUcgV8ui7aPc161FgrqWScQxV","NXT/ra9eZxMbJrUcgV8ui7aPc161FgrqWScQxV"],
	// ["LTC/ra9eZxMbJrUcgV8ui7aPc161FgrqWScQxV","NXT/ra9eZxMbJrUcgV8ui7aPc161FgrqWScQxV"],
	//JustCoin
	["XRP","BTC/rJHygWcTLVpSXkowott6kzgZU6viQSVYM1"]
	// ["XRP","NOK/rJHygWcTLVpSXkowott6kzgZU6viQSVYM1"],
	// ["XRP","LTC/rJHygWcTLVpSXkowott6kzgZU6viQSVYM1"],
	// ["XRP","EUR/rJHygWcTLVpSXkowott6kzgZU6viQSVYM1"],
	// ["BTC/rJHygWcTLVpSXkowott6kzgZU6viQSVYM1","EUR/rJHygWcTLVpSXkowott6kzgZU6viQSVYM1"],
	// ["BTC/rJHygWcTLVpSXkowott6kzgZU6viQSVYM1","NOK/rJHygWcTLVpSXkowott6kzgZU6viQSVYM1"],
	// ["BTC/rJHygWcTLVpSXkowott6kzgZU6viQSVYM1","LTC/rJHygWcTLVpSXkowott6kzgZU6viQSVYM1"]
];

var precisions={
	"GBP": 5,
	"ILS": 5,
	"CNY": 2,
	"JPY": 5,
	"EUR": 5,
	"USD": 5,
	"BTC": 8,
	"NXT": 5,
	"LTC": 5,
	"XRP": 5,
	"CNY": 5,
	"ILS": 5,
	"NOK": 5,
}

var remote = new ripple.Remote({
	  trusted:        true,
	  local_signing:  true,
	  local_fee:      true,
	  // trace: 		  true,
	  fee_cushion:     1.5,
	  servers: [
	      { host: 's_west.ripple.com', port: 443, secure: true },
	      { host: 's_east.ripple.com', port: 443, secure: true },
	  ]
	}).on('state',function(state){
		console.log('state',state);
});

Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
      return Handlebars.compile(rawTemplate);
};

Handlebars.registerHelper('format', function(amount,p) {
	if (_.isUndefined(amount)){
		return "";
	}
	var precision=(_.isNumber(p))?p:precisions[amount.currency().to_json()];
	return amount.to_human({precision:precision,min_precision:precision});
});

Handlebars.registerHelper('nickname', function(account) {
	return nicknames[account];
});

Handlebars.registerHelper('percent', function(percentage) {
	return _.isUndefined(percentage)?"":percentage.toFixed(2)+"%";
});

$(function(){
	remote.connect(function() {
		// var accounts=new Accounts(accounts,{
		// 	accounts 	: accounts,
		// 	remote 		: remote
		// });
		var books=new Books(pairs,{
			parse:true,
			remote : remote
		});
		var layout = new ExchangeLayout({
			el: "#layout",
		});
		layout.render();
		layout.left.show(new BooksView({
			collection: books
		}));
		layout.right.show(new ExchangesView({
			collection: books.byExchange()
		}));
	});
});