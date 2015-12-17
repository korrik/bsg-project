Ext.define('Bsg.store.RepresentationStore', {

    extend      : 'Ext.data.Store',
    requires    : ['Ext.data.Store', 'Bsg.model.RepresentationModel'],
    storeId     : 'representationStore',
    model       : 'Bsg.model.RepresentationModel',

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
            read   : 'provider.Representation.read',
            create : 'provider.Representation.create',
            update : 'provider.Representation.update',
            destroy: 'provider.Representation.destroy',
            load   : 'provider.Representation.load'
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