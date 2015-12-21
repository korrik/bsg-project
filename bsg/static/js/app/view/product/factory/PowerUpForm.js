Ext.define('Bsg.view.product.factory.PowerUpForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.PowerUpForm',
    xtype: 'powerupform',
    api: {
        submit: provider.methods.factory_power_up
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
            xtype: 'numberfield',
            itemId: 'id_factory',
            name: 'id_factory',
            hidden: true
        },{
            xtype: 'combobox',
            name: 'power',
            editable: false,
            fieldLabel: 'Мощность (за квартал)',
            store: Ext.create('Bsg.store.PriceExpansionStore'),
            displayField: 'power',
            allowBlank: false,
            listeners: {
                change: function (combo, newValue, oldValue, eOpts) {
                    me.down('#itemId_pricepowerup').setValue(combo.getSelection().get('price'));
                }
            }
        },{
            xtype: 'numberfield',
            readOnly: true,
            name: 'price',
            itemId: 'itemId_pricepowerup',
            fieldLabel: 'Стоимость открытия (руб)',
            labelWidth: 160,
            allowBlank: false
        }];
        me.buttons = [{
            formBind: true,
            scope: this,
            text: 'Увеличить мощность',
            cls: 'full-button',
            handler: function () {
                me.fireEvent('onfactorypowerup', me)
            }
        }];

        me.callParent();
    }
});