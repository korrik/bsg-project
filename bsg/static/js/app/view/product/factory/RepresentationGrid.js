Ext.define('Bsg.view.product.factory.RepresentationGrid',{
	extend: 'Ext.grid.Panel',
	cls: 'grid-box',
	xtype: 'representationgrid',
	alias: 'widget.RepresentationGrid',

	viewConfig: {
        emptyText: 'Ниодно представительство пока не открыто!',
		deferEmptyText: false
	},

	initComponent: function(){
		var me = this;

		me.title = 'Представительства';
		me.columns = [{
			text: 'Страна',
			dataIndex: 'country',
			flex: 1,
            menuDisabled : true
		},{
			text: 'Стоимость открытия',
			dataIndex: 'price',
			flex: 1,
            menuDisabled : true,
			renderer: function(v){
                if (v) {
                   return v + ',00 рублей';
                } else {
                    return '';
                }
            }
		}];
		me.store = 'RepresentationStore';


		me.tools = [{
			type: 'help',
			tooltip: 'Сюда подсказку'
		},{
			type:'plus',
			tooltip: 'Открыть предствительство',
			handler: function(){
				me.fireEvent('onopenrepresentation');
			}
		}];

		me.stripeRows = true;
		me.callParent();
	}

});
