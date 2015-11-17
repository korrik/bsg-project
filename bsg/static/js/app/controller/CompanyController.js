Ext.define('Bsg.controller.CompanyController', {

    extend	: 'Ext.app.Controller',

    stores	: [
        'PartnerStore',
        'ActivitiesStore',
        'CostsStore',
        'ResourcesStore',
        'SalesChannelsStore',
        'OffersStore',
        'RelationshipStore',
        'StreamStore',
        'SegmentsStore'
    ],

    models	: [
        'PartnerModel',
        'ActivitiesModel',
        'CostsModel',
        'ResourcesModel',
        'SalesChannelsModel',
        'OffersModel',
        'RelationshipModel',
        'StreamModel',
        'SegmentsModel'
    ],

    views	: [
	    'company.CompanyContainer',
        'company.PartnersGrid',
        'company.ActivitiesGrid',
        'company.ResourcesGrid',
        'company.SalesChannelsGrid',
        'company.OffersGrid',
        'company.RelationshipGrid',
        'company.StreamGrid',
        'company.SegmentsGrid'
    ],

    init	: function() {
        var me = this;

        this.control({
            'PartnersGrid': {
                onaddpartner: me.onAddPartner
            },
            'ActivitiesGrid': {
                onaddactivities: me.onAddActivities
            },
            'CostsGrid': {
                onaddcosts: me.onAddCosts
            },
            'ResourcesGrid': {
                onaddresources: me.onAddResources
            },
            'SalesChannelsGrid': {
                onaddsaleschannels: me.onAddSalesChannels
            },
            'OffersGrid': {
                onaddoffers: me.onAddOffers
            },
            'RelationshipGrid': {
                onaddrelationship: me.onAddRelationship
            },
            'StreamGrid': {
                onaddstream: me.onAddStream
            },
            'SegmentsGrid': {
                onaddsegments: me.onAddSegments
            }
        });
    },

    //Functions!

    onAddRecordToGrid: function(me, store, record) {
        store.autoSync = false;
        store.insert(0, record);
        store.autoSync = true;
        me.rowEditing.startEdit(0,0);
    },

    onAddPartner: function(me) {
        this.onAddRecordToGrid(me, this.getStore('PartnerStore'),
            Ext.create('Bsg.model.PartnerModel'));
    },

    onAddActivities: function(me) {
        this.onAddRecordToGrid(me, this.getStore('ActivitiesStore'),
            Ext.create('Bsg.model.ActivitiesModel'));
    },

    onAddCosts: function(me) {
        this.onAddRecordToGrid(me, this.getStore('CostsStore'),
            Ext.create('Bsg.model.CostsModel'));
    },

    onAddResources: function(me) {
        this.onAddRecordToGrid(me, this.getStore('ResourcesStore'),
            Ext.create('Bsg.model.ResourcesModel'));
    },

    onAddSalesChannels: function(me) {
        this.onAddRecordToGrid(me, this.getStore('SalesChannelsStore'),
            Ext.create('Bsg.model.SalesChannelsModel'));
    },

    onAddOffers: function(me) {
        this.onAddRecordToGrid(me, this.getStore('OffersStore'),
            Ext.create('Bsg.model.OffersModel'));
    },

    onAddRelationship: function(me) {
        this.onAddRecordToGrid(me, this.getStore('RelationshipStore'),
            Ext.create('Bsg.model.RelationshipModel'));
    },

    onAddStream: function(me) {
        this.onAddRecordToGrid(me, this.getStore('StreamStore'),
            Ext.create('Bsg.model.StreamModel'));
    },

    onAddSegments: function(me) {
        this.onAddRecordToGrid(me, this.getStore('SegmentsStore'),
            Ext.create('Bsg.model.SegmentsModel'));
    }


});