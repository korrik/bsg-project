Ext.define('Bsg.controller.ViewController', {
    extend  : 'Ext.app.Controller',

    stores  : [],
    models  : [],
    views   : ['MenuPanel', 'Viewport'],

    init    : function() {

        this.control({
            'MenuPanel' : {
                itemselect: this.openTab
            },
            'Viewport': {

            }
        });
    },

    /**
     * Opening tab if not opened.
     * @param panel Panel with tab links.
     * @param title
     * @param url
     */
    openTab : function(panel, title, url) {
        console.log(panel)
        console.log(title)
        console.log(url)

        var vp = Ext.ComponentQuery.query('Viewport')[0];
        var mainpanel = vp.down('#itemId_mainpanel');
        mainpanel.add({xtype: BsgMenu.getXTypeByUrl(url)});

    }

});
