Ext.define('Bsg.view.product.factory.ShopGrid',{
	extend: 'Ext.grid.Panel',
	cls: 'grid-box',
	xtype: 'shopgrid',
	alias: 'widget.ShopGrid',

	viewConfig: {
        emptyText: 'Ниодно магазина пока не открыто!',
		deferEmptyText: false
	},

	initComponent: function(){
		var me = this;

		me.title = 'Магазины';
		me.columns = [{
			text: 'Название',
			dataIndex: 'name',
			flex: 1,
            menuDisabled : true
		},{
			text: 'Страна',
			dataIndex: 'country',
			flex: 1,
            menuDisabled : true
		},{
            text: 'Кол-во сотрудников',
            dataIndex: 'people',
            flex: 1,
            menuDisabled: true
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
		me.store = 'ShopStore';


		me.tools = [{
			type: 'help',
			tooltip: 'Сюда подсказку'
		},{
			type:'plus',
			tooltip: 'Открыть магазин',
			handler: function(){
				me.fireEvent('onopenshop');
			}
		}];

		me.stripeRows = true;

        me.dockedItems = Ext.create('Ext.ux.statusbar.StatusBar', {
            itemId: 'itemId_statusBarShop',
            dock: 'bottom',
            cls: 'grid-statusbar',
            layout: 'column',
            defaultType: 'container',
            items: [{
                columnWidth: 0.27,
                items: [{
                    xtype: 'label',
                    margin: '0 0 0 5',
                    text: 'Кол-во магазинов: ',
                    cls: 'text-statusbar-shop'
                },{
                    xtype: 'label',
                    itemId: 'itemId_countshop',
                    text: '0',
                    cls: 'text-statusbar-shop'
                }]
            },{
                columnWidth: 0.27,
                items: [{
                    xtype: 'label',
                    text: 'Кол-во сотрудников: ',
                    cls: 'text-statusbar-shop'
                },{
                    itemId: 'itemId_countpeople',
                    xtype: 'label',
                    text: '0',
                    cls: 'text-statusbar-shop'
                }]
            },{
                columnWidth: 0.4,
                items: [{
                    xtype: 'label',
                    text: 'Затраты на открытие: ',
                    cls: 'text-statusbar-shop'
                },{
                    itemId: 'itemId_sumInvestments',
                    xtype: 'label',
                    text: '0',
                    cls: 'text-statusbar-shop'
                }]
            }]
        });

        me.listeners = {
            afterrender: {
                fn: function(grid){
                    me.fireEvent('onsetstatusbar', grid)
                }
            }
        };

		me.callParent();
	}

});
