Ext.define('Bsg.store.RelationshipStore', {

    extend      : 'Ext.data.Store',
    requires    : ['Ext.data.Store', 'Bsg.model.RelationshipModel'],
    storeId     : 'relationshipStore',
    model       : 'Bsg.model.RelationshipModel',

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
            read   : 'provider.Relationship.read',
            create : 'provider.Relationship.create',
            update : 'provider.Relationship.update',
            destroy: 'provider.Relationship.destroy',
            load   : 'provider.Relationship.load'
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