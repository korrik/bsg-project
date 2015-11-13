Ext.define('Bsg.view.main.MainForm',{
	extend: 'Ext.form.Panel',
	cls: 'grid-box',
	xtype: 'mainform',
	alias: 'widget.MainForm',
	border:false,
  resizable:false,
  draggable:false,
  closable:false,

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
			text: 'Сохранить',
			cls: 'full-button',
		}]

		me.callParent();
	}

});
