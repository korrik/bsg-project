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
	cls: 'dashboard-area',

	columnWidths: [
		0.40,
		0.60
	],

	parts:{
		maingrid: {
			viewTemplate: {
				title: 'Табличка',
        collapsible:false,
        draggable:false,
        closable:false,
				items:[{
					xtype: 'maingrid',
					itemId: 'itemId_mainGrid'
				}]
			}
		},
		mainchart: {
			viewTemplate: {
				title: 'MainChart',
				collapsible:false,
        draggable:false,
        closable:false,
				items: [{
					xtype: 'mainchart',
					itemId: 'itemId_mainChart'
				}]
			}
		},
		mainform: {
			viewTemplate: {
				title: 'MainForm',
				collapsible:false,
        draggable:false,
        closable:false,
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
