Ext.define('Bsg.view.company.CompanyDashboard',{

	extend: 'Ext.dashboard.Dashboard',

	requires: [
		'Bsg.view.company.PartnersGrid',
		'Bsg.view.company.ActivitiesGrid',
		'Bsg.view.company.CostsGrid',
		'Bsg.view.company.ResourcesGrid',
		'Bsg.view.company.SalesChannelsGrid',
		'Bsg.view.company.OffersGrid',
		'Bsg.view.company.RelationshipGrid'

	],
	stateful: false,

	xtype: 'companydashboard',
	alias: 'widget.CompanyDashboard',
	cls: 'dashboard-area',

	columnWidths: [
		0.33,
		0.33,
		0.33
	],

	parts:{
		partnersgrid: {
			viewTemplate: {
                collapsible:false,
                draggable:false,
                closable:false,
				items:[{
					xtype: 'partnersgrid',
					itemId: 'itemId_partnersGrid'
				}]
			}
		},
		activitiesgrid: {
			viewTemplate: {
                collapsible:false,
                draggable:false,
                closable:false,
				items:[{
					xtype: 'activitiesgrid',
					itemId: 'itemId_activitiesGrid'
				}]
			}
		},
		costsgrid: {
			viewTemplate: {
                collapsible:false,
                draggable:false,
                closable:false,
				items:[{
					xtype: 'costsgrid',
					itemId: 'itemId_costsGrid'
				}]
			}
		},
		resourcesgrid: {
			viewTemplate: {
                collapsible:false,
                draggable:false,
                closable:false,
				items:[{
					xtype: 'resourcesgrid',
					itemId: 'itemId_resourcesGrid'
				}]
			}
		},
		saleschannelsgrid: {
			viewTemplate: {
                collapsible:false,
                draggable:false,
                closable:false,
				items:[{
					xtype: 'saleschannelsgrid',
					itemId: 'itemId_saleschannelsGrid'
				}]
			}
		},
		offersgrid: {
			viewTemplate: {
                collapsible:false,
                draggable:false,
                closable:false,
				items:[{
					xtype: 'offersgrid',
					itemId: 'itemId_offersGrid'
				}]
			}
		},
		relationshipgrid: {
			viewTemplate: {
				collapsible: false,
				draggable: false,
				closable: false,
				items: [{
					xtype: 'relationshipgrid',
					itemId: 'itemId_relationshipGrid'
				}]
			}
		},
		streamgrid: {
			viewTemplate: {
				collapsible: false,
				draggable: false,
				closable: false,
				items: [{
					xtype: 'streamgrid',
					itemId: 'itemId_streamGrid'
				}]
			}
		},
		segmentsgrid: {
			viewTemplate: {
				collapsible: false,
				draggable: false,
				closable: false,
				items: [{
					xtype: 'segmentsgrid',
					itemId: 'itemId_segmentsGrid'
				}]
			}
		}
	},

	defaultContent: [{
		type: 'partnersgrid',
		columnIndex: 0,

	},{
		type: 'activitiesgrid',
		columnIndex: 0,

	},{
		type: 'resourcesgrid',
		columnIndex: 0,

	},{
		type: 'saleschannelsgrid',
		columnIndex: 1,
	},{
		type: 'streamgrid',
		columnIndex: 1,
	},{
		type: 'costsgrid',
		columnIndex: 1,

	},{
		type: 'segmentsgrid',
		columnIndex: 2,

	},{
		type: 'offersgrid',
		columnIndex: 2,

	},{
		type: 'relationshipgrid',
		columnIndex: 2,

	}]
});
