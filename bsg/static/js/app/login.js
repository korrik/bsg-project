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

    var formLogin = Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        bodyPadding: 10,
        cls: 'loginform',
        width: 360,
        margin: '150 0 0 0',
        buttonAlign: 'left',
        api: {
            submit: 'provider.methods.login_user'
        },
        defaultType: 'textfield',
        items: [{
            emptyText: 'Логин',
            cls: 'input',
            name: 'username',
            allowBlank: false
        },{
            emptyText: 'Пароль',
            cls: 'input',
            name: 'password',
            allowBlank: false,
            inputType: 'password'
        }],

        buttons: [{
            text: 'Войти',
            xtype: 'button',
            cls: 'full-button',
            margin: '0 0 0 24',
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
        }, {
          text: 'Регистрация',
          formBind: false,
          disabled: false,
          cls: 'button-simple',
          handler: function () {
            window.location.href = '/registration.html'
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
