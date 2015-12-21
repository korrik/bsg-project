Ext.define('Bsg.view.product.factory.ShopForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ShopForm',
    xtype: 'shopform',
    api: {
        submit: provider.methods.open_shop
    },
    bodyPadding: 5,
    frame: false,
    border: false,

    initComponent: function () {
        var me = this;
        me.layout = 'anchor';

        me.defaults = {
            anchor: '100%',
            layout: 'anchor'
        };
        me.items = [{
            xtype: 'textfield',
            name: 'name',
            labelWidth: 120,
            fieldLabel: 'Название магазина'
        },{
            xtype: 'combobox',
            name: 'country',
            itemId: 'itemId_countrywhereopen',
            editable: false,
            fieldLabel: 'Страна',
            store: Ext.create('Bsg.store.PriceOpenStore'),
            displayField: 'name',
            allowBlank: false,
            listeners: {
                change: function (combo, newValue, oldValue, eOpts) {
                    me.down('#itemId_priceopenshop').setValue(combo.getSelection().get('shop'));
                }
            }
        },{
            xtype: 'numberfield',
            readOnly: true,
            name: 'price',
            itemId: 'itemId_priceopenshop',
            fieldLabel: 'Стоимость открытия (руб)',
            labelWidth: 160,
            allowBlank: false
        },{
            xtype: 'numberfield',
            name: 'people',
            labelWidth: 120,
            minValue: 1,
            fieldLabel:'Кол-во сотрудников'
        }];
        me.buttons = [{
            formBind: true,
            scope: this,
            text: 'Открыть магазин',
            cls: 'full-button',
            handler: function () {
                me.fireEvent('oncreateshop', me)
            }
        }];

        me.callParent();
    }
});