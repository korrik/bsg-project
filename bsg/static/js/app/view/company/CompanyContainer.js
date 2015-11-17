Ext.define('Bsg.view.company.CompanyContainer', {

    extend: 'Ext.container.Container',

    requires: ['Bsg.view.company.CompanyDashboard'],

    xtype: 'companycontainer',

    alias: 'widget.CompanyContainer',

    initComponent: function(){

        this.layout = 'border';

        this.autoScroll = true;

        this.items = [
            {
                itemId: 'itemId_companyDashboard',
                xtype: 'companydashboard',
                region: 'center'
            }
        ];

        this.callParent();
    }
});
