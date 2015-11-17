Ext.define('Bsg.store.SegmentsStore', {

    extend      : 'Ext.data.Store',
    requires    : ['Ext.data.Store', 'Bsg.model.SegmentsModel'],
    storeId     : 'segmentsStore',
    model       : 'Bsg.model.SegmentsModel',

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
            read   : 'provider.Segments.read',
            create : 'provider.Segments.create',
            update : 'provider.Segments.update',
            destroy: 'provider.Segments.destroy',
            load   : 'provider.Segments.load'
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