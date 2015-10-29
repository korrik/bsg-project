Ext.onReady(function(){
    var formLogin = Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        bodyPadding: 10,
        width: 350,
        margin: '30 0 0 0',
        title: 'Вход',
        header: {
            titleAlign: 'center'
        },
        api: {
            submit: 'provider.methods.login_user'
        },

        defaultType: 'textfield',
        items: [{
            fieldLabel: 'Логин',
            name: 'username',
            allowBlank: false
        },{
            fieldLabel: 'Пароль',
            name: 'password',
            allowBlank: false,
            inputType: 'password'
        }],

        buttons: [{
            text: 'Войти',
            formBind: false,
            disabled: false,
            handler: function() {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    form.submit({
                        success: function(form, o) {
                            window.location.href = '/main.html';
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
            items: [formLogin]
        }]
    }).show();
});
