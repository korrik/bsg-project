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
			sortable: false
		},{
			text: 'Представительство',
			dataIndex: 'representation',
            menuDisabled : true,
			flex: 1,
			sortable: false
		},{
			text: 'Магазин',
			dataIndex: 'shop',
            menuDisabled : true,
			flex: 1,
			sortable: false
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
