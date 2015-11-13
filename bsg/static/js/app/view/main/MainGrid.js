Ext.define('Bsg.view.main.MainGrid',{
	extend: 'Ext.grid.Panel',
	cls: 'grid-box',
	xtype: 'maingrid',
	alias: 'widget.MainGrid',

	initComponent: function(){
		var me = this;

		me.columns = [
			{ text: 'Name', dataIndex: 'name' },
			{ text: 'Email', dataIndex: 'email', flex: 1 },
			{ text: 'Phone', dataIndex: 'phone' }
		];

		me.store = Ext.create('Ext.data.Store', {
			storeId: 'simpsonsStore',
			id: 'myid',
			fields:[ 'name', 'email', 'phone'],
			data: [
				{ name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
				{ name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
				{ name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
				{ name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
			]
		});

		me.callParent();
	}

});
