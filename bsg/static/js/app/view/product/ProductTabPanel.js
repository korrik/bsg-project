Ext.define('Bsg.view.product.ProductTabPanel',{
	extend: 'Ext.tab.Panel',

	xtype: 'producttabpanel',

	alias: 'widget.ProductTabPanel',

	requires: [
		'Bsg.view.product.ModelsGridForm',
		'Bsg.view.product.RandDGrid',
		'Bsg.view.product.factory.FactoryAndShopPanel'
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
			title: 'R&D',
			autoScroll: true,
			layout: 'column',
			items: [{
				columnWidth: 1,
				xtype: 'randdgrid',
				itemId: 'itemId_randDGrid'
			}]
		},{
			title: 'Завод + Магазин',
			layout: 'fit',
			items: [{
				xtype: 'factoryandshoppanel',
				itemId: 'itemId_factoryAndShopPanel'
			}]
		},{
			title: 'Производство'
		}];

		this.callParent();
    }
});