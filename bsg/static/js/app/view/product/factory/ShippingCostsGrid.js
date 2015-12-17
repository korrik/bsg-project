Ext.define('Bsg.view.product.factory.ShippingCostsGrid',{
	extend: 'Ext.grid.Panel',
	cls: 'grid-box',
	xtype: 'shippingcostsgrid',
	alias: 'widget.ShippingCostsGrid',

	initComponent: function(){
		var me = this;

		me.title = 'Логистические издержки доставки продукции по странам';
		me.columns = [{
			text: 'Название страны',
			dataIndex: 'name',
            menuDisabled : true,
			flex: 1,
			sortable: false,
            renderer: me.onRendererNull
		},{
			text: 'Китай',
			dataIndex: 'country_one',
            menuDisabled : true,
			flex: 1,
			sortable: false,
            renderer: me.onRendererNull
		},{
			text: 'Россия',
			dataIndex: 'country_two',
            menuDisabled : true,
			flex: 1,
			sortable: false,
            renderer: me.onRendererNull
		},{
			text: 'Англия',
			dataIndex: 'country_three',
            menuDisabled : true,
			flex: 1,
			sortable: false,
            renderer: me.onRendererNull
		},{
			text: 'Бразилия',
			dataIndex: 'country_four',
            menuDisabled : true,
			flex: 1,
			sortable: false,
            renderer: me.onRendererNull
		},{
			text: 'США',
			dataIndex: 'country_five',
            menuDisabled : true,
			flex: 1,
			sortable: false,
            renderer: me.onRendererNull
		}];
		me.store = 'ShippingCostsStore';


		me.tools = [{
			type: 'help',
			tooltip: 'Сюда подсказку'
		}];

		me.stripeRows = true;
		me.callParent();
	},

    onRendererNull: function(val, metaData, record) {
        if (val == null) {
            metaData.tdAttr = 'bgcolor=#000';
        }
        return val;
    }

});
