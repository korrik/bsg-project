Ext.define('Bsg.controller.ProductController', {

    extend	: 'Ext.app.Controller',

    stores	: [
        'ProductStore'
    ],

    models	: [
        'ProductModel'
    ],

    views	: [
        'product.ModelsGridForm'
    ],

    init	: function() {
        var me = this;

        this.control({
            'ModelsGridForm':{
                onresetform: this.onResetForm,
                oncreateproduct: this.onCreateProduct,
                onupdateproduct: this.onUpdateProduct,
                onviewformproduct: this.onViewFormProduct,
                oncloseformproduct: this.onCloseFormProduct,
                onviewupdateform: this.onViewUpdateFormProduct
            }
        });
    },

    onCreateProduct: function(form){
        var me = this;
        form.getForm().submit({
            waitMsg: 'Создание...',
            success: function(f, o){
                Ext.Msg.show({
                    msg: o.result.msg,
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.INFO
                });
                me.onResetForm(form);
                me.onCloseFormProduct(form.up('panel'), 'itemId_formProduct');
                me.getStore('ProductStore').reload();

            },
            failure: function(f, o){
                Ext.Msg.show({
                    msg: 'Ошибка:' + o.result.msg,
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.ERROR
                });
            }
        });
    },

    onUpdateProduct: function(form){
        var me = this;
        form.getForm().submit({
            waitMsg: 'Обновление...',
            success: function(f, o){
                Ext.Msg.show({
                    msg: o.result.msg,
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.INFO
                });
                me.onResetForm(form);
                me.onCloseFormProduct(form.up('panel'), 'itemId_formUpdateProduct');
                me.getStore('ProductStore').reload();

            },
            failure: function(f, o){
                Ext.Msg.show({
                    msg: 'Ошибка:' + o.result.msg,
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.ERROR
                });
            }
        });
    },

    onResetForm: function(form){
        form.getForm().reset();
    },

    onCloseFormProduct: function(me, itemid){
        me.down('#' + itemid).hide();
    },

    onViewFormProduct: function(me) {
        me.down('#itemId_formUpdateProduct').hide();
        me.down('#itemId_formProduct').show();
    },

    onViewUpdateFormProduct: function(me, record){
        var form = me.down('#itemId_formUpdateProduct');
        form.loadRecord(record);
        me.down('#itemId_formProduct').hide();
        form.show();
    }

});