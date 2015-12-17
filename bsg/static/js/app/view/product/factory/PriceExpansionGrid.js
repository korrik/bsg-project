Ext.define('Bsg.view.product.factory.PriceExpansionGrid',{
	extend: 'Ext.grid.Panel',
	cls: 'grid-box',
	xtype: 'priceexpansiongrid',
	alias: 'widget.PriceExpansionGrid',

	initComponent: function(){
		var me = this;

		me.title = 'Стоимость раширения производства';
		me.columns = [{
			text: 'Мощность (за квартал)',
			dataIndex: 'power',
            menuDisabled : true,
			flex: 1,
			sortable: false
		},{
			text: 'Стоимость',
			dataIndex: 'price',
            menuDisabled : true,
			flex: 1,
			sortable: false
		}];
		me.store = 'PriceExpansionStore';


		me.tools = [{
			type: 'help',
			tooltip: 'Сюда подсказку'
		}];

		me.stripeRows = true;
		me.callParent();
	}

});
