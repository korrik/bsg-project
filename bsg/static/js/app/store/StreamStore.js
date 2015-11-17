Ext.define('Bsg.store.StreamStore', {

    extend      : 'Ext.data.Store',
    requires    : ['Ext.data.Store', 'Bsg.model.StreamModel'],
    storeId     : 'streamStore',
    model       : 'Bsg.model.StreamModel',

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
            read   : 'provider.Stream.read',
            create : 'provider.Stream.create',
            update : 'provider.Stream.update',
            destroy: 'provider.Stream.destroy',
            load   : 'provider.Stream.load'
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