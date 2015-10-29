Ext.onReady(function(){
    var formResitr = Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        bodyPadding: 10,
        width: 350,
        margin: '30 0 0 0',
        title: 'Регистрация',
        header: {
            titleAlign: 'center'
        },
        api: {
            submit: 'provider.methods.create_user'
        },

        defaultType: 'textfield',
        items: [{
            fieldLabel: 'Логин',
            name: 'username',
            allowBlank: false
        },{
            fieldLabel: 'Имя',
            name: 'first_name',
            allowBlank: false
        },{
            fieldLabel: 'Фамилия',
            name: 'last_name',
            allowBlank: false
        },{
            fieldLabel: 'E-mail',
            name: 'email',
            allowBlank: false,
            vtype: 'email'
        },{
            fieldLabel: 'Пароль',
            name: 'password',
            allowBlank: false,
            inputType: 'password'
        }],

        buttons: [{
            text: 'Зарегистрироваться',
            formBind: false,
            disabled: false,
            handler: function() {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    form.submit({
                        success: function(form, o) {
                            Ext.Msg.show({
                                msg: 'Вы успешно зарегистрировались!',
                                buttons: Ext.Msg.OK,
                                icon: Ext.MessageBox.INFO,
                                fn: function(){
                                    window.location.href = '/login.html'
                                }
                            });
                        },
                        failure: function(form, o) {
                            Ext.Msg.alert('Failed', o.result.msg);
                        }
                    });
                }
            }
        }]
    });

    var viewPort = Ext.create('Ext.container.Viewport',{
        layout: 'border',
        itemId: 'main',
        items: [{
            xtype: 'panel',
            region: 'center',
            itemId: 'itemId_formpanel',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            frame: false,
            border: false,
            items: [formResitr]
        }]
    }).show();
});
