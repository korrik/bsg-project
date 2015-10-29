Ext.define('BsgMenu', {
    singleton: true,
    tables: [
        {title: 'Главная',  url:'1', xtype: 'MainContainer'},
        {title: 'Компания',  url:'2', xtype: ''},
        {title: 'Продукт',  url:'3', xtype: ''},
        {title: 'Финансы',  url:'4', xtype: ''},
        {title: 'Маркетинг',  url:'5', xtype: ''},
        {title: 'HR',  url:'6', xtype: ''},
        {title: 'Производство',  url:'7', xtype: ''}

    ],

    // Note: url == itemId
    getXTypeByUrl: function(url) {
        var xt = null;
        for (var i = 0; i < this.tables.length; i++){
            if (this.tables[i].url == url) {
                xt = this.tables[i].xtype;
            }
        }
        return xt;
    }
});

Ext.define('Bsg.view.MenuPanel', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.MenuPanel',
    requires: ['Ext.view.View', 'Ext.ux.form.ItemSelector'],
    layout: 'fit',
    header: false,

    initComponent: function(){
        Ext.apply(this, {
            items: this.createView()
        });

        this.callParent();
    },

    /**
     * Create the DataView to be used for the table list.
     * @private
     * @return {Ext.view.View}
     */
    createView: function(){
        Ext.define('MenuModel', {
            extend: 'Ext.data.Model',
            fields: ['title', 'url']
        });

        this.view = Ext.create('Ext.view.View', {
            autoScroll: true,
            store:  Ext.create('Ext.data.Store', {
                model: 'MenuModel',
                data: BsgMenu.tables
            }),
            selModel: {
                mode: 'SINGLE',
                listeners: {
                    scope: this,
                    selectionchange: this.onSelectionChange
                }
            },
            listeners: {
                scope: this,
                viewready: this.onViewReady
            },
            trackOver: true,
            cls: 'table-list',
            itemSelector: '.table-list-item',
            overItemCls: 'table-list-item-hover',
            tpl: '<tpl for="."><div class="table-list-item">{title}</div></tpl>'  //NOTE: {title} - same as 'title' field in model
        });
        return this.view;
    },

    /**
     *  By default select first item in the list.
     */
    onViewReady: function(){
        this.view.getSelectionModel().select(this.view.store.first());
    },

    /**
     * Gets the currently selected record in the view.
     * @private
     * @return {Ext.data.Model} Returns the selected model. false if nothing is selected.
     */
    getSelectedItem: function(){
        return this.view.getSelectionModel().getSelection()[0] || false;
    },

    
    setDeselectAll: function() {
        this.view.getSelectionModel().deselectAll();
    },

    /**
     * Calls when selection changes.
     * @private
     */
    onSelectionChange: function(){
        var rec = this.getSelectedItem();
        this.setDeselectAll();
        if (rec) {
            this.fireEvent('itemselect', this, rec.get('title'), rec.get('url'));
        }
    }
});