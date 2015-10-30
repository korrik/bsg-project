Ext.define('Bsg.view.company.CompanyContainer', {

    extend: 'Ext.container.Container',

    requires: [],

    xtype: 'companycontainer',

    alias: 'widget.CompanyContainer',


    initComponent: function(){

        this.layout = 'border';

        this.autoScroll = true;

        this.html = 'Компания';

        this.items = [

        ];

        this.callParent();
    }
});