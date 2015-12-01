Ext.define('Bsg.view.product.ProductTabPanel',{
	extend: 'Ext.tab.Panel',

	xtype: 'producttabpanel',

	alias: 'widget.ProductTabPanel',

	requires: [
		'Bsg.view.product.ModelsGridForm',
		'Bsg.view.product.RandDGrid'
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
			layout: 'column',
			items: [{
				columnWidth: 1,
				xtype: 'randdgrid',
				itemId: 'itemId_randDGrid'
			}]
		},{
			title: 'Завод + Магазин'
		},{
			title: 'Производство'
		}];

		this.callParent();
    }
});