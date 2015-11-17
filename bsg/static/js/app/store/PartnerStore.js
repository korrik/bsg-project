Ext.define('Bsg.store.PartnerStore', {

    extend      : 'Ext.data.Store',
    requires    : ['Ext.data.Store', 'Bsg.model.PartnerModel'],
    storeId     : 'partnerStore',
    model       : 'Bsg.model.PartnerModel',

    remoteSort: true,
    remoteFilter: true,
    autoSync : true,
    autoSave : true,
    autoLoad : true,
    pageSize : 50,

    baseParams: {
        start: 0,
        limit: 50,
        meta: true
    },

    proxy: {
        type: 'direct',
        api: {
            read   : 'provider.Partner.read',
            create : 'provider.Partner.create',
            update : 'provider.Partner.update',
            destroy: 'provider.Partner.destroy',
            load   : 'provider.Partner.load'
        },
        reader: {
            type: 'json',
            rootProperty: 'records',
            successProperty: 'success',
            totalProperty: 'total'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            allowSingle: true,
            rootProperty: 'records'
        }
    }
});