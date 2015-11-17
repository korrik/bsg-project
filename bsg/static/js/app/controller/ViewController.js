Ext.define('Bsg.controller.ViewController', {
    extend  : 'Ext.app.Controller',

    stores  : [],
    models  : [],
    views   : [
        'MenuPanel',
        'Viewport',
        'HelpPanel'
    ],

    refs: [
        {
            ref: 'Viewport',
            selector: 'viewport'
        }
    ],

    init    : function() {
        var me = this;
        me.control({
            'MenuPanel' : {
                itemselect: me.openContent
            },
            'Viewport': {
                onopenhelp: me.onOpenHelp
            },
        });
    },

    /**
     * Opening tab if not opened.
     * @param panel Panel with tab links.
     * @param title
     * @param url
     */
    openContent : function(record) {
        if (record) {
            this.getViewport().content.getLayout().setActiveItem(record.get('url'))
        }
    },

    onOpenHelp: function() {
        var panel = Ext.create('Bsg.view.HelpPanel');

        Ext.create('Ext.window.Window', {
            title: 'Описние системы',
            layout: 'fit',
            width: 800,
            height: 600,
            maximizable: true,
            stateful: true,
            constrain: true,
            modal: true,
            items: panel
        }).show();
    }

});
