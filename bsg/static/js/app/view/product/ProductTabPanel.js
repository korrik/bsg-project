Ext.define('Bsg.view.product.ProductTabPanel',{
	extend: 'Ext.tab.Panel',

	xtype: 'producttabpanel',

	alias: 'widget.ProductTabPanel',

	requires: [
		'Bsg.view.product.ModelsGridForm'
	],

	initComponent: function(){
		var me = this;

		me.autoScroll = true;

		me.items = [{
			title: 'Продукт',
			layout: 'fit',
			items: [{
				xtype: 'modelsgridform',
				itemId: 'itemId_modelsGridForm'
			}]
		},{
			title: 'R&D'
		},{
			title: 'Завод + Магазин'
		},{
			title: 'Производство'
		}];

		this.callParent();
    }
});