Ext.define('Bsg.view.product.factory.FactoryAndShopPanel',{
    extend: 'Ext.panel.Panel',
    xtype: 'factoryandshoppanel',
    alias: 'widget.FactoryAndShopPanel',

    requires: [
        'Bsg.view.product.factory.PriceOpenGrid',
        'Bsg.view.product.factory.PriceExpansionGrid',
        'Bsg.view.product.factory.ShippingCostsGrid',
        'Bsg.view.product.factory.FactoryPanel'
    ],

    autoScroll: true,

    initComponent: function() {
        var me = this;


        me.layout = 'column';
        me.height = '100%';
        me.items = [{
            xtype: 'priceopengrid',
            columnWidth: 0.6,
            padding: '0 0 0 20'
        },{
            xtype: 'priceexpansiongrid',
            padding: '0 20 0 20',
            columnWidth: 0.4
        },{
            xtype: 'shippingcostsgrid',
            columnWidth: 1,
            padding: '5 20 0 20'
        },{
            xtype: 'factorypanel',
            columnWidth: 0.3,
            padding: '10 0 0 20'
        }];

        me.callParent()
    }
});