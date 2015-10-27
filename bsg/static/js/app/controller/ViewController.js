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

    }

});
