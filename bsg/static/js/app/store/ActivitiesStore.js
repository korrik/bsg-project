Ext.define('Bsg.store.ActivitiesStore', {

    extend      : 'Ext.data.Store',
    requires    : ['Ext.data.Store', 'Bsg.model.ActivitiesModel'],
    storeId     : 'activitiesStore',
    model       : 'Bsg.model.ActivitiesModel',

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
            read   : 'provider.Activities.read',
            create : 'provider.Activities.create',
            update : 'provider.Activities.update',
            destroy: 'provider.Activities.destroy',
            load   : 'provider.Activities.load'
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