Ext.define('Bsg.view.main.MainForm',{
	extend: 'Ext.form.Panel',

	xtype: 'mainform',
	alias: 'widget.MainForm',

	initComponent: function(){
		var me = this;

		me.layout = 'anchor';
		me.defaults = {
			anchor: '100%'
		};
		me.defaultsType = 'textfield';

		me.items = [{
			fieldLabel: 'First field'
		},{
			fieldLabel: 'Second field'
		}];

		me.buttons = [{
			text: 'Сохранить'
		}]

		me.callParent();
	}

});