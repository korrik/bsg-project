Ext.define('Bsg.view.product.ProductContainer', {

    extend: 'Ext.container.Container',

    requires: ['Bsg.view.product.ProductTabPanel'],

    xtype: 'productcontainer',

    alias: 'widget.ProductContainer',

    initComponent: function(){

        this.layout = 'border';

        this.autoScroll = true;

        this.items = [
            {
                itemId: 'itemId_productTabPanel',
                xtype: 'producttabpanel',
                region: 'center'
            }
        ];

        this.callParent();
    }
});
