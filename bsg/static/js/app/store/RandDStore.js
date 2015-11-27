Ext.define('Bsg.store.RandDStore', {

    extend      : 'Ext.data.Store',
    requires    : ['Ext.data.Store', 'Bsg.model.RandDModel'],
    storeId     : 'randDStore',
    model       : 'Bsg.model.RandDModel',

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
            read   : 'provider.RandD.read',
            create : 'provider.RandD.create',
            update : 'provider.RandD.update',
            destroy: 'provider.RandD.destroy',
            load   : 'provider.RandD.load'
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