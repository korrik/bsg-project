Ext.define('Bsg.view.main.MainContainer', {

    extend: 'Ext.container.Container',

    requires: ['Bsg.view.main.MainDashboard'],

    xtype: 'maincontainer',

    alias: 'widget.MainContainer',

    initComponent: function(){

        this.layout = 'border';

        this.autoScroll = true;

        this.items = [
            {
                itemId: 'itemId_mainDashboard',
                xtype: 'maindashboard',
                region: 'center'
            }
        ];

        this.callParent();
    }
});
