Ext.define('Bsg.controller.ProductController', {

    extend: 'Ext.app.Controller',

    stores: [
        'ProductStore',
        'RandDStore',
        'PriceOpenStore',
        'PriceExpansionStore',
        'ShippingCostsStore',
        'FactoryStore',
        'RepresentationStore',
        'ShopStore'
    ],

    models: [
        'ProductModel',
        'RandDModel',
        'PriceOpenModel',
        'PriceExpansionModel',
        'ShippingCostsModel',
        'FactoryModel',
        'RepresentationModel',
        'ShopModel'
    ],

    views: [
        'product.ModelsGridForm',
        'product.RandDGrid',
        'product.factory.FactoryPanel',
        'product.factory.RepresentationGrid',
        'product.factory.ShopGrid'
    ],

    refs: [
        {
            ref: 'FactoryPanel',
            selector: 'factorypanel'
        }, {
            ref: 'RepresentationForm',
            selector: 'representationform'
        }, {
            ref: 'RepresentationGrid',
            selector: 'representationgrid'
        }, {
            ref: 'ShopGrid',
            selector: 'shopgrid'
        }, {
            ref: 'ShopForm',
            selector: 'shopform'
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
                onbeforeviewfactorypanel: this.onBeforeViewFactoryPanel,
                onfactorypowerup: this.onFactoryPowerUp
            },
            'RepresentationGrid': {
                onopenrepresentation: this.onOpenRepresentation
            },
            'RepresentationForm': {
                oncreaterepresentation: this.onCreateRepresentation
            },
            'ShopGrid': {
                onopenshop: this.onOpenShop,
                onsetstatusbar: this.onSetStatusbarShop
            },
            'ShopForm': {
                oncreateshop: this.onCreateShop
            },
            'PowerUpForm': {
                onfactorypowerup: this.PowerUpFactory
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

    onBuildFactory: function () {
        var me = this,
            fp = this.getFactoryPanel();
        fp.getLayout().getActiveItem().getForm().submit({
            waitMsg: 'Идет сохранение...',
            success: function (form, o) {
                Ext.Msg.show({
                    msg: 'Завод успешно построен!',
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.INFO
                });
                me.getStore('FactoryStore').load(function () {
                    me.onBeforeViewFactoryPanel();
                });

            },
            failure: function (form, o) {
                Ext.Msg.show({
                    msg: 'Ошибка: ' + o.result.msg,
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.ERROR
                });
            }
        });
    },

    onBeforeViewFactoryPanel: function () {
        var me = this,
            fp = this.getFactoryPanel();
        if (me.getStore('FactoryStore').count() == 0) {
            fp.getLayout().getActiveItem().getForm().loadRecord(Ext.create('Bsg.model.FactoryModel'))
        } else {
            fp.getLayout().setActiveItem(fp.getLayout().getNext());
            var rec = me.getStore('FactoryStore').first();
            fp.getLayout().getActiveItem().getForm().loadRecord(rec);

            fp.down('#itemId_toolpowerup').show();

            me.getRepresentationGrid().show();

            if (me.getStore('RepresentationStore').count() != 0) {
                me.getShopGrid().show();
            }
        }
    },

    onOpenRepresentation: function () {
        if (this.getStore('RepresentationStore').count() > 5) {
            Ext.Msg.show({
                msg: 'Уже открыто максимальное кол-во представительств!',
                buttons: Ext.Msg.OK,
                icon: Ext.MessageBox.ERROR
            });
            return false;
        }
        var form = Ext.create('Bsg.view.product.factory.RepresentationForm', {
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

    onCreateRepresentation: function (form) {
        var me = this,
            flag = false,
            value = form.down('#itemId_countrywhereopen').getSelection().get('name');

        me.getStore('RepresentationStore').each(function (item) {
            if (value == item.get('country')) {
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
            success: function (f, o) {
                Ext.Msg.show({
                    msg: 'Представительство успешно открыто!',
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.INFO
                });
                me.getStore('RepresentationStore').load(function(){
                    me.getShopGrid().show();
                });
                form.up().close();
            },
            failure: function (form, o) {
                Ext.Msg.show({
                    msg: 'Ошибка: ' + o.result.msg,
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.ERROR
                });
            }
        });
    },

    onOpenShop: function () {
        var form = Ext.create('Bsg.view.product.factory.ShopForm', {
            itemId: 'itemId_shopForm'
        });

        var window = Ext.create('Ext.window.Window', {
            title: 'Открытие нового магазина',
            layout: 'fit',
            width: 450,
            height: 250,
            stateful: true,
            constrain: true,
            modal: true,
            items: form
        }).show();
    },

    onCreateShop: function (form) {
        var me = this,
            flag = false,
            value = form.down('#itemId_countrywhereopen').getSelection().get('name');

        me.getStore('RepresentationStore').each(function (item) {
            if (value == item.get('country')) {
                flag = true;
                return false;
            }
        });

        if (!flag) {
            Ext.Msg.show({
                msg: 'Представительство в выбраной стране еще не открыто!',
                buttons: Ext.Msg.OK,
                icon: Ext.MessageBox.ERROR
            });
            return false;
        }
        form.getForm().submit({
            waitMsg: 'Идет сохранение...',
            success: function (f, o) {
                Ext.Msg.show({
                    msg: 'Магазин успешно открыт!',
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.INFO
                });
                me.getStore('ShopStore').load();
                form.up().close();
            },
            failure: function (form, o) {
                Ext.Msg.show({
                    msg: 'Ошибка: ' + o.result.msg,
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.ERROR
                });
            }
        });
    },
    onSetStatusbarShop: function(grid){
        var statusMoney = grid.down('#itemId_sumInvestments'),
            statusPeople = grid.down('#itemId_countpeople'),
            statusShop = grid.down('#itemId_countshop'),
            money = 0,
            people = 0,
            shop = grid.getStore().count();

        grid.getStore().each(function (record) {
            money = money + record.get('price');
            people = people + record.get('people');
        });

        statusMoney.setText(money + ',00 рублей');
        statusPeople.setText(people);
        statusShop.setText(shop);
    },

    onFactoryPowerUp: function(){
        var me = this,
            form = Ext.create('Bsg.view.product.factory.PowerUpForm', {
                itemId: 'itemId_powerUpForm'
            });

        var id_factory = me.getFactoryPanel().down('#id_factory').getValue();

        form.down('#id_factory').setValue(id_factory);

        var window = Ext.create('Ext.window.Window', {
            title: 'Увеличение мощности завода',
            layout: 'fit',
            width: 300,
            height: 200,
            stateful: true,
            constrain: true,
            modal: true,
            items: form
        }).show();
    },

    PowerUpFactory: function(form){
        var me = this;

        form.getForm().submit({
            waitMsg: 'Идет сохранение...',
            success: function (f, o) {
                Ext.Msg.show({
                    msg: 'Мощность успешно увеличена!',
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.INFO
                });
                me.getStore('FactoryStore').load(function(records){
                        me.getFactoryPanel().getLayout().getActiveItem().getForm().loadRecord(records[0]);
                });
                form.up().close();
            },
            failure: function (form, o) {
                Ext.Msg.show({
                    msg: 'Ошибка: ' + o.result.msg,
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.ERROR
                });
            }
        });
    }


});