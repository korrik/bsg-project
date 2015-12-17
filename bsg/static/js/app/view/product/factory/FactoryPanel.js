Ext.define('Bsg.view.product.factory.FactoryPanel',{
    extend: 'Ext.panel.Panel',
    xtype: 'factorypanel',
    alias: 'widget.FactoryPanel',

    requires: [

    ],

    initComponent: function() {
        var me = this;
        me.layout = 'card';
        me.title = 'Завод';
        me.items = [{
            itemId: 'step_formfactory',
            layout: 'anchor',
            xtype: 'form',
            api: {
                submit: provider.methods.build_factory
            },
            defaults:{
                anchor: '100%',
                layout: 'anchor'
            },
            items: [{
                xtype: 'displayfield',
                labelWidth: 0,
                value: 'Для постройки завода - выберите страну'
            },{
                xtype: 'combobox',
                name: 'country',
                editable: false,
                fieldLabel: 'Страна',
                store: Ext.create('Bsg.store.PriceOpenStore'),
                displayField: 'name',
                allowBlank: false,
                listeners:{
                    change: function(combo, newValue, oldValue, eOpts ) {
                        me.down('#itemId_priceopenfactory').setValue(combo.getSelection().get('factory'));
                        me.down('#itemId_startpoweroffactory').setValue(5000)
                    }
                }
            },{
                xtype: 'numberfield',
                readOnly: true,
                name: 'price',
                itemId: 'itemId_priceopenfactory',
                fieldLabel: 'Стоимость открытия (руб)',
                labelWidth: 160,
                allowBlank: false
            },{
                xtype: 'numberfield',
                name: 'power',
                itemId: 'itemId_startpoweroffactory',
                allowBlank: true,
                readOnly: true,
                fieldLabel: 'Начальная мощность',
                labelWidth: 140
            }],
            buttons: [{
                formBind: true,
                scope: this,
                text: 'Построить завод',
                cls: 'full-button',
                handler: function(){
                    me.fireEvent('onbuildfactory', me)
                }
            }]
        },{
            itemId: 'step_viewfactory',
            layout: 'anchor',
            xtype: 'form',
            defaults:{
                anchor: '100%',
                layout: 'anchor'
            },
            items: [{
                xtype: 'displayfield',
                name: 'country',
                fieldLabel: 'Страна'
            },{
                xtype: 'displayfield',
                name: 'price',
                labelWidth: 170,
                fieldLabel: 'Стоимость постройки (руб)'
            },{
                xtype: 'displayfield',
                name: 'power',
                labelWidth: 140,
                fieldLabel: 'Мощность завода'
            }]

        }];

        me.listeners = {
            afterrender: function(){
                me.fireEvent('onbeforeviewfactorypanel');
            }
        };

        me.callParent();
    }
});