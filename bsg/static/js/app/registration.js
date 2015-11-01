Ext.onReady(function(){
    var panel = Ext.create('Ext.container.Container', {
          layout: 'fit',
          region: 'west',
          cls: 'panel-top',
          renderTo :  Ext.getBody(),
          items: {
              xtype: 'label',
              cls: 'label-system',
              html: 'ed<span class="main_title">Sim</span>',
          }
     });

    var formResitr = Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        bodyPadding: 10,
        width: 360,
        cls: 'loginform',
        margin: '150 0 0 0',
        buttonAlign: 'left',
        api: {
            submit: 'provider.methods.create_user'
        },

        defaultType: 'textfield',
        items: [{
            emptyText: 'Логин',
            cls: 'input',
            name: 'username',
            allowBlank: false
        },{
            emptyText: 'Имя',
            cls: 'input',
            name: 'first_name',
            allowBlank: false
        },{
            emptyText: 'Фамилия',
            cls: 'input',
            name: 'last_name',
            allowBlank: false
        },{
            emptyText: 'E-mail',
            cls: 'input',
            name: 'email',
            allowBlank: false,
            vtype: 'email'
        },{
            emptyText: 'Пароль',
            cls: 'input',
            name: 'password',
            allowBlank: false,
            inputType: 'password'
        },/* {
            emptyText: 'Повторите пароль',
            cls: 'input',
            name: 'password2',
            allowBlank: false,
            inputType: 'password'
        }*/],

        buttons: [{
            text: 'Зарегистрироваться',
            cls: 'full-button',
            margin: '0 0 0 24',
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
        }, {
          text: 'Войти',
          formBind: false,
          disabled: false,
          cls: 'button-simple',
          handler: function () {
            window.location.href = '/login.html'
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
