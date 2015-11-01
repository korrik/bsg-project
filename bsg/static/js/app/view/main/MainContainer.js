Ext.define('Bsg.view.main.MainContainer', {

    extend: 'Ext.container.Container',

    requires: [],

    xtype: 'maincontainer',

    alias: 'widget.MainContainer',

    initComponent: function(){

        this.layout = 'border';

        this.autoScroll = true;

        this.html = 'Главная';

        this.items = [

        ];

        this.callParent();
    }
});
