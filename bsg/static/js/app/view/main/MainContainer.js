Ext.define('Bsg.view.main.MainContainer', {

    extend: 'Ext.container.Container',

    requires: ['Bsg.view.main.MainPanel'],

    alias: 'widget.MainContainer',

    initComponent: function(){

        this.layout = 'border';

        this.autoScroll = true;

        this.items = [
            {
                itemId  : 'itemId_firstPanel',
                xtype   : 'MainPanel',
                region  : 'center'
            }
        ]

        this.callParent();
    }
});