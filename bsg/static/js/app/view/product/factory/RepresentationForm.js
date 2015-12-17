Ext.define('Bsg.view.product.factory.RepresentationForm',{
    extend: 'Ext.form.Panel',
    alias: 'widget.RepresentationForm',
    xtype: 'representationform',
    api: {
        submit: provider.methods.open_representation
    },
    bodyPadding: 5,
    frame: false,
    border: false,

    initComponent: function(){
        var me = this;
        me.layout = 'anchor';

        me.defaults = {
            anchor: '100%',
            layout: 'anchor'
        };
        me.items = [{
            xtype: 'displayfield',
            labelWidth: 0,
            value: 'Выберите страну, в которой Вы хотите открыть представительство',
            padding: '0 0 10 0',
        },{
            xtype: 'combobox',
            name: 'country',
            itemId: 'itemId_countrywhereopen',
            editable: false,
            fieldLabel: 'Страна',
            store: Ext.create('Bsg.store.PriceOpenStore'),
            displayField: 'name',
            allowBlank: false,
            listeners:{
                change: function(combo, newValue, oldValue, eOpts ) {
                    me.down('#itemId_priceopenrepresentation').setValue(combo.getSelection().get('representation'));
                }
            }
        },{
            xtype: 'numberfield',
            readOnly: true,
            name: 'price',
            itemId: 'itemId_priceopenrepresentation',
            fieldLabel: 'Стоимость открытия (руб)',
            labelWidth: 160,
            allowBlank: false
        }];
        me.buttons = [{
            formBind: true,
            scope: this,
            text: 'Открыть представительство',
            cls: 'full-button',
            handler: function(){
                me.fireEvent('oncreaterepresentation', me)
            }
        }];

        me.callParent();
    }
});