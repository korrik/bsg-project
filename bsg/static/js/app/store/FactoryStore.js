Ext.define('Bsg.store.FactoryStore', {

    extend      : 'Ext.data.Store',
    requires    : ['Ext.data.Store', 'Bsg.model.FactoryModel'],
    storeId     : 'factoryStore',
    model       : 'Bsg.model.FactoryModel',

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
            read   : 'provider.Factory.read',
            create : 'provider.Factory.create',
            update : 'provider.Factory.update',
            destroy: 'provider.Factory.destroy',
            load   : 'provider.Factory.load'
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