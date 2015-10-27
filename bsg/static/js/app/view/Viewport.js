Ext.define('Bsg.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.Viewport',
    layout: 'fit',

    requires: [

    ],

    initComponent: function() {
        var me = this;
        me.usernamedefault = 'Anonymous';
        me.loginStatus = false;

        me.toolbar = Ext.create('Ext.toolbar.Toolbar', {
            region: 'north',
            height: 50,
            itemId: 'itemId_view_toolbar',
            scope: this,
            items: [{
                xtype: 'label',
                cls: 'label-system',
                margin: '0 0 0 20',
                html: 'ed<span class="main_title">Sim</span>',
            }, '->', {
                xtype: 'button',
                text: 'Пользователь: ',
                //iconCls: 'user-gray', Вставить иконку юзера из шрифта!
                itemId: 'itemId_labeluser',
                disabled: true,
                border: false,
                disabledCls: 'button-disable'
            }, {
                xtype: 'button',
                text: me.usernamedefault,
                itemId: 'itemId_username',
                disabled: true,
                border: false,
                disabledCls: 'button-disable'
            }, '-', {
                xtype: 'button',
                //iconCls: 'logout', Добавить иконку выход!
                scope: this,
                text: 'Выйти',
                handler: function () {}
            }]
        });

        //Меню
        me.menuPanel = Ext.create('Bsg.view.MenuPanel', {
            itemId: 'itemId_view_menupanel',
            region:'center',
            split: true,
            minHeight: 250,
            // minSize: 100,
            // rootVisible: false,
            autoScroll: true
        });

        me.mainPanel = Ext.create('Ext.panel.Panel',{
            itemId: 'itemId_mainpanel',
            region: 'center',
            layout: 'border',
            header: false,
            margin: '0 5 5 0',
            minWidth: 400
        });

        Ext.apply(me, {
            layout: 'border',
            itemId: 'itemId_main',
            items: [me.toolbar,{
                layout: 'border',
                itemId: 'itemId_view_westPanel',
                region: 'west',
                border: false,
                split: true,
                header: false,
                minSize: 100,
                maxSize: 500,
                collapsible: true,
                width: 240,
                items: [me.menuPanel]
            }, me.mainPanel]
        });




        me.callParent(arguments);
    }
});
