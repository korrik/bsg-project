Ext.define('Bsg.view.product.factory.PriceOpenGrid',{
	extend: 'Ext.grid.Panel',
	cls: 'grid-box',
	xtype: 'priceopengrid',
	alias: 'widget.PriceOpenGrid',

	initComponent: function(){
		var me = this;

		me.title = 'Стоимость открытия';
		me.columns = [{
			text: 'Страна',
			dataIndex: 'name',
            menuDisabled : true,
			flex: 1,
			sortable: false
		},{
			text: 'Завод',
			dataIndex: 'factory',
            menuDisabled : true,
			flex: 1,
			sortable: false,
			renderer: function(v){if (v) { return v + ',00 рублей'} else {return ''}}
		},{
			text: 'Представительство',
			dataIndex: 'representation',
            menuDisabled : true,
			flex: 1,
			sortable: false,
			renderer: function(v){if (v) { return v + ',00 рублей'} else {return ''}}
		},{
			text: 'Магазин',
			dataIndex: 'shop',
            menuDisabled : true,
			flex: 1,
			sortable: false,
			renderer: function(v){if (v) { return v + ',00 рублей'} else {return ''}}
		}];
		me.store = 'PriceOpenStore';


		me.tools = [{
			type: 'help',
			tooltip: 'Сюда подсказку'
		}];

		me.stripeRows = true;
		me.callParent();
	}

});
