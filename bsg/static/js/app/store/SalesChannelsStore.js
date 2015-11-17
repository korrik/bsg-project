Ext.define('Bsg.store.SalesChannelsStore', {

    extend      : 'Ext.data.Store',
    requires    : ['Ext.data.Store', 'Bsg.model.SalesChannelsModel'],
    storeId     : 'salesChannelsStore',
    model       : 'Bsg.model.SalesChannelsModel',

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
            read   : 'provider.SalesChannels.read',
            create : 'provider.SalesChannels.create',
            update : 'provider.SalesChannels.update',
            destroy: 'provider.SalesChannels.destroy',
            load   : 'provider.SalesChannels.load'
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