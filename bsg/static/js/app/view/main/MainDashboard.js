Ext.define('Bsg.view.main.MainDashboard',{

	extend: 'Ext.dashboard.Dashboard',

	requires: [
		'Bsg.view.main.MainGrid',
		'Bsg.view.main.MainChart',
		'Bsg.view.main.MainForm'

	],
	stateful: false,

	xtype: 'maindashboard',
	alias: 'widget.MainDashboard',

	columnWidths: [
		0.40,
		0.60
	],

	parts:{
		maingrid: {
			viewTemplate: {
				title: 'MainGrid',
				items:[{
					xtype: 'maingrid',
					itemId: 'itemId_mainGrid'
				}]
			}
		},
		mainchart: {
			viewTemplate: {
				title: 'MainChart',
				items: [{
					xtype: 'mainchart',
					itemId: 'itemId_mainChart'
				}]
			}
		},
		mainform: {
			viewTemplate: {
				title: 'MainForm',
				items: [{
					xtype: 'mainform',
					itemId: 'itemId_mainForm'
				}]
			}
		}
	},

	defaultContent: [{
		type: 'maingrid',
		columnIndex: 0,
		height: 300,
	},{
		type: 'mainchart',
		columnIndex: 1,
		height: 600
	},{
		type: 'mainform',
		columnIndex: 0,
		height: 200
	}]
});