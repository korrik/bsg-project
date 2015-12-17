Ext.define('Bsg.controller.ProductController', {

    extend: 'Ext.app.Controller',

    stores: [
        'ProductStore',
        'RandDStore',
        'PriceOpenStore',
        'PriceExpansionStore',
        'ShippingCostsStore',
        'FactoryStore',
        'RepresentationStore'
    ],

    models: [
        'ProductModel',
        'RandDModel',
        'PriceOpenModel',
        'PriceExpansionModel',
        'ShippingCostsModel',
        'FactoryModel',
        'RepresentationModel'
    ],

    views: [
        'product.ModelsGridForm',
        'product.RandDGrid',
        'product.factory.FactoryPanel',
        'product.factory.RepresentationGrid',
    ],

    refs: [
        {
            ref: 'FactoryPanel',
            selector: 'factorypanel'
        },{
            ref: 'RepresentationForm',
            selector: 'representationform'
        },{
            ref: 'RepresentationGrid',
            selector: 'representationgrid'
        }
    ],
    init: function () {

        this.control({
            'ModelsGridForm': {
                onresetform: this.onResetForm,
                oncreateproduct: this.onCreateProduct,
                onupdateproduct: this.onUpdateProduct,
                onviewformproduct: this.onViewFormProduct,
                oncloseformproduct: this.onCloseFormProduct,
                onviewupdateform: this.onViewUpdateFormProduct
            },
            'RandDGrid': {
                onchangetimerand: this.onChangeRandD,
                onsetsuminvestments: this.onSetSumInvestments
            },
            'FactoryPanel': {
                onbuildfactory: this.onBuildFactory,
                onbeforeviewfactorypanel: this.onBeforeViewFactoryPanel
            },
            'RepresentationGrid': {
                onopenrepresentation: this.onOpenRepresentation
            },
            'RepresentationForm':{
                oncreaterepresentation: this.onCreateRepresentation
            }
        });
    },

    onCreateProduct: function (form) {
        var me = this;
        form.getForm().submit({
            waitMsg: 'Создание...',
            success: function (f, o) {
                Ext.Msg.show({
                    msg: o.result.msg,
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.INFO
                });
                me.onResetForm(form);
                me.onCloseFormProduct(form.up('panel'), 'itemId_formProduct');
                me.getStore('ProductStore').reload();

            },
            failure: function (f, o) {
                Ext.Msg.show({
                    msg: 'Ошибка:' + o.result.msg,
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.ERROR
                });
            }
        });
    },

    onUpdateProduct: function (form) {
        var me = this;
        form.getForm().submit({
            waitMsg: 'Обновление...',
            success: function (f, o) {
                Ext.Msg.show({
                    msg: o.result.msg,
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.INFO
                });
                me.onResetForm(form);
                me.onCloseFormProduct(form.up('panel'), 'itemId_formUpdateProduct');
                me.getStore('ProductStore').reload();

            },
            failure: function (f, o) {
                Ext.Msg.show({
                    msg: 'Ошибка:' + o.result.msg,
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.ERROR
                });
            }
        });
    },

    onResetForm: function (form) {
        form.getForm().reset();
    },

    onCloseFormProduct: function (me, itemid) {
        me.down('#' + itemid).hide();
    },

    onViewFormProduct: function (me) {
        me.down('#itemId_formUpdateProduct').hide();
        me.down('#itemId_formProduct').show();
    },

    onViewUpdateFormProduct: function (me, record) {
        var form = me.down('#itemId_formUpdateProduct');
        form.loadRecord(record);
        me.down('#itemId_formProduct').hide();
        form.show();
    },

    onChangeRandD: function (record) {
        var me = this, time, value = record.get('time');

        if (value == 1) {
            time = 'first';
        } else if (value == 2) {
            time = 'second';
        } else if (value == 3) {
            time = 'third';
        }
        record.set({price: me.onGetPrice(record.get('name'), time)});
    },

    onGetPrice: function (name, time) {
        var result = '';
        Ext.define('Params', {
            extend: 'Ext.data.Model',
            fields: [
                {name: 'name', type: 'string'},
                {name: 'first', type: 'int'},
                {name: 'second', type: 'int'},
                {name: 'third', type: 'int'}
            ]
        });
        var store = Ext.create('Ext.data.Store', {
            model: 'Params',
            data: [
                {name: 'Сверхскоростной Wifi+LTE', first: 3500000, second: 2400000, third: 900000},
                {name: '10мп камера', first: 3500000, second: 2000000, third: 600000},
                {name: 'Retina дисплей', first: 5000000, second: 3200000, third: 1500000},
                {name: '5,0 Экран', first: 2500000, second: 1750000, third: 500000},
                {name: '2000 mah батарея', first: 5200000, second: 2800000, third: 1400000},
                {name: '4-х ядерный сверхскоростной процессор', first: 6500000, second: 3100000, third: 1800000}
            ]
        });

        store.each(function (item) {
            if (item.get('name') == name) {
                result = item.get(time);
                return false;
            }
        });

        return result;
    },

    onSetSumInvestments: function (grid) {
        var statusLabel = grid.down('#itemId_sumInvestments'),
            sum = 0;
        grid.getStore().each(function (record) {
            sum = sum + record.get('price');
        });
        statusLabel.setText(sum + ',00 рублей');
    },

    onBuildFactory: function(){
        var me = this,
            fp = this.getFactoryPanel();
            fp.getLayout().getActiveItem().getForm().submit({
                waitMsg: 'Идет сохранение...',
                success: function(form, o){
                    Ext.Msg.show({
                        msg: 'Завод успешно построен!',
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.INFO
                    });
                    me.getStore('FactoryStore').load(function(){
                        me.onBeforeViewFactoryPanel();
                    });

                },
                failure: function(form, o){
                    Ext.Msg.show({
                        msg: 'Ошибка: ' + o.result.msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                }
            });
    },

    onBeforeViewFactoryPanel: function(){
        var me = this,
            fp = this.getFactoryPanel();
        if (me.getStore('FactoryStore').count() == 0){
            fp.getLayout().getActiveItem().getForm().loadRecord(Ext.create('Bsg.model.FactoryModel'))
        } else {
            fp.getLayout().setActiveItem(fp.getLayout().getNext());
            var rec = me.getStore('FactoryStore').first();
            fp.getLayout().getActiveItem().getForm().loadRecord(rec);

            me.getRepresentationGrid().show();
        }
    },

    onOpenRepresentation: function(){
        if (this.getStore('RepresentationStore').count() > 5) {
            Ext.Msg.show({
                msg: 'Уже открыто максимальное кол-во представительств!',
                buttons: Ext.Msg.OK,
                icon: Ext.MessageBox.ERROR
            });
            return false;
        }
        var form = Ext.create('Bsg.view.product.factory.RepresentationForm',{
            itemId: 'itemId_representationForm'
        });

        var window = Ext.create('Ext.window.Window', {
            title: 'Открытие нового представительства',
            layout: 'fit',
            width: 350,
            height: 200,
            stateful: true,
            constrain: true,
            modal: true,
            items: form
        }).show();
    },

    onCreateRepresentation: function(form){
        var me = this,
            flag = false,
            value = form.down('#itemId_countrywhereopen').getSelection().get('name');

        me.getStore('RepresentationStore').each(function(item){
            if (value == item.get('country')){
                flag = true;
                return false;
            }
        });

        if (flag) {
            Ext.Msg.show({
                msg: 'Представительство в выбраной стране уже открыто!',
                buttons: Ext.Msg.OK,
                icon: Ext.MessageBox.ERROR
            });
            return false;
        }
            form.getForm().submit({
                waitMsg: 'Идет сохранение...',
                success: function(f, o){
                    Ext.Msg.show({
                        msg: 'Представительство успешно открыто!',
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.INFO
                    });
                    me.getStore('RepresentationStore').load();
                    form.up().close();
                },
                failure: function(form, o){
                    Ext.Msg.show({
                        msg: 'Ошибка: ' + o.result.msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                }
            });
    }

});