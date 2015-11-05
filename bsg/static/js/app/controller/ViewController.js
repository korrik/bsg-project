Ext.define('Bsg.controller.ViewController', {
    extend  : 'Ext.app.Controller',

    stores  : [],
    models  : [],
    views   : ['MenuPanel', 'Viewport',
    //'UserPanel'
  ],

    refs: [
        {
            ref: 'Viewport',
            selector: 'viewport'
        }
    ],

    init    : function() {

        this.control({
            'MenuPanel' : {
                itemselect: this.openContent
            },
            'Viewport': {

            },
            /*'UserPanel': {

            },*/
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

        //this.getContent().getLayout().setActiveItem(recods.get('url'));

        //var vp = Ext.ComponentQuery.query('Viewport')[0];
        //var mainpanel = vp.down('#itemId_mainpanel');
        //mainpanel.add({xtype: BsgMenu.getXTypeByUrl(url)});

    }

});
