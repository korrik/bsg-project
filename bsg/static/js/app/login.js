Ext.create('Ext.form.Panel', {

    renderTo: Ext.getBody(),

    title: 'Авторизация',
    bodyPadding: 10,
    width: 350,
    style: 'margin: 20px auto;',
    header: {
      titleAlign: 'center',
    },
    url: 'main.html',

    defaultType: 'textfield',
    items: [{
        fieldLabel: 'Имя',
        name: 'username',
        allowBlank: false
    },{
        fieldLabel: 'Фамилия',
        name: 'LastName',
        allowBlank: false
    },{
      fieldLabel: 'Пароль',
      name: 'Password',
      allowBlank: false,
      inputType: 'password',
    }],


    buttons: [{
        text: 'Войти',
        formBind: false,
        disabled: false,
        handler: function() {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                form.submit({
                    success: function(form, action) {
                       Ext.Msg.alert('Success', action.result.msg);
                    },
                    failure: function(form, action) {
                        Ext.Msg.alert('Failed', action.result.msg);
                    }
                });
            }
        }
    }],
});
