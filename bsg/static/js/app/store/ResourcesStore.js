Ext.define('Bsg.store.ResourcesStore', {

    extend      : 'Ext.data.Store',
    requires    : ['Ext.data.Store', 'Bsg.model.ResourcesModel'],
    storeId     : 'resourcesStore',
    model       : 'Bsg.model.ResourcesModel',

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
            read   : 'provider.Resources.read',
            create : 'provider.Resources.create',
            update : 'provider.Resources.update',
            destroy: 'provider.Resources.destroy',
            load   : 'provider.Resources.load'
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