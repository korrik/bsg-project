Ext.define('Bsg.store.PriceExpansionStore', {

    extend      : 'Ext.data.Store',
    requires    : ['Ext.data.Store', 'Bsg.model.PriceExpansionModel'],
    storeId     : 'priceexpansionStore',
    model       : 'Bsg.model.PriceExpansionModel',

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
            read   : 'provider.PriceExpansion.read',
            create : 'provider.PriceExpansion.create',
            update : 'provider.PriceExpansion.update',
            destroy: 'provider.PriceExpansion.destroy',
            load   : 'provider.PriceExpansion.load'
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