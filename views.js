var Draggable={
    attributes  : {
        "draggable":true
    },
    events: {
        "dragstart": "start",
        "dragenter": "enter",
        "dragleave": "leave",
        "dragend": "leave",
        "dragover": "over",
        "drop": "drop"
    },
    start: function (e) {
        this.model.collection.draggedModel = this.model;
        this.model.collection.in = this;
        this.model.collection.out = this;
        // For Firefox
        e.originalEvent.dataTransfer.setData('dummy', this.cid);
    },
    enter: function (e) {
        if (this.model.collection.in.cid!=this.model.collection.out.cid){
            this.model.collection.in.$el.children('.panel').addClass("panel-warning");
            this.model.collection.out.$el.children('.panel').removeClass("panel-warning");
        }
        this.model.collection.in=this;
    },
    leave: function (e) {
        this.model.collection.out=this;
    },
    over: function (e) {
        if (e.preventDefault) {
            e.preventDefault(); 
        }
        return false;
    },
    drop: function () {
        this.leave();
        var collection = this.model.collection;
        collection.models.splice(collection.indexOf(collection.draggedModel), 1);
        collection.models.splice(this.$el.index(), 0, collection.draggedModel);
        _.forEach(collection.models, function (model, index) {
            model.set("index", index, {silent: true});
        }, this);
        collection.trigger("reordered");
    }
};

var DraggableItemView=Marionette.ItemView.extend(Draggable);
var DraggableLayout=Marionette.Layout.extend(Draggable);

var NowrapRegion = Marionette.Region.extend({
    open: function(view){
        var region=this.$el;
        view.on("dom:refresh collection:rendered",function(){
            this.$el.find("tr").clone(true).appendTo(region.empty());
        })
    }
});

var OrderView=Marionette.ItemView.extend({ 
	template: "#order-template",
    tagName: "tr",
	serializeData: function(){
		return _.extend(this.model.toJSON(),{
			sum: this.model.sum()
		})
	}
});

var OrdersView=Marionette.CollectionView.extend({
	itemView: OrderView,
 	showCollection: function(){
    	var ItemView;
    	_.each(this.collection.top(10),function(item, index){
      		ItemView = this.getItemView(item);
      		this.addItemView(item, ItemView, index);
    	}, this);
  	}
});

var TradeView=Marionette.ItemView.extend({
    tagName: "tr",
    template: "#trade-template"
})

var TradesView=Marionette.CollectionView.extend({
    itemView: TradeView
})

var SummaryView=Marionette.ItemView.extend({
    tagName: "tr",
  	initialize: function(options){
  		this.template=options.template;
  		this.model.get("asks").on("reset trade",this.render);
  		this.model.get("bids").on("reset trade",this.render);
  	},
  	serializeData: function(){
  		return this.model.summary();
  	},
})

var BookView=DraggableLayout.extend({
  	className: function(){
        return "col-md-4 "+((this.model.get("index")>2)?"hidden":"");
    },
  	template: "#book-template",
  	regions:{
  		header 	: "#header",
        asks 	: {selector: "#asks",regionType: NowrapRegion},
  		bids 	: {selector: "#bids",regionType: NowrapRegion},
  		spread  : "#spread",
        trades 	: {selector: "#trades",regionType: NowrapRegion}
  	},
  	onShow: function(options) {
  		this.asks.show(new OrdersView({
  			collection: this.model.get("asks")
  		}));
  		this.bids.show(new OrdersView({
  			collection: this.model.get("bids")
  		}));
  		this.header.show(new SummaryView({
  			template: "#header-template",
  			model: this.model
  		}));
  		this.spread.show(new SummaryView({
  			template: "#spread-template",
  			model: this.model
  		}));
  		this.trades.show(new TradesView({
  			collection: this.model.get("trades")
  		}));
  	}
});

var BooksView=Marionette.CollectionView.extend({
	className: "row",
	itemView: BookView,
    collectionEvents :{
        "reordered": "render"
    }
});

var MarketView=DraggableItemView.extend({
    tagName     : "a",
    template    : "#market-template",
    className   : function(){
        return "list-group-item "+((this.model.get("index")<=2)?"active":"")
    },
    initialize  : function(options){
        this.model.get("asks").on("reset trade",this.render);
        this.model.get("bids").on("reset trade",this.render);
    },
    serializeData: function(){
        return this.model.summary();
    }
})

var ExchangeView=Marionette.CompositeView.extend({
    template            : '#exchange-template',
    className           : "panel panel-info",
    itemView            : MarketView,
    itemViewContainer   : '#markets',
    initialize          : function(data,options){
        this.collection=this.model.get("markets");
    }
});

var ExchangesView=Marionette.CollectionView.extend({
    id          : "exchanges",
    className   : "panel-group",
    itemView    : ExchangeView,
    onDomRefresh :function(){
        this.$el.find('#markets:first').parent().collapse("show");
    }
})

var ExchangeLayout=Backbone.Marionette.Layout.extend({
	template: "#exchange-layout",
	regions: {
		left    :'#left',
        right   :'#right'
	}
})
