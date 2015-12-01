Ext.define('Bsg.view.product.RandDGrid',{
	extend: 'Ext.grid.Panel',
	xtype: 'randdgrid',
	alias: 'widget.RandDGrid',

	initComponent: function(){
		var me = this;

        me.title = 'Разработки новых компонентов и функций';
        me.height = '100%',
		me.columns = [{
            menuDisabled : true,
			text: 'Компонент',
			dataIndex: 'name',
			sortable: false,
			flex: 1

		},{
            menuDisabled : true,
			text: 'Время разработки',
			dataIndex: 'time',
			sortable: false,
			flex: .5,
			editor: new Ext.form.field.ComboBox({
                allowBlank: false,
				typeAhead: true,
				triggerAction: 'all',
				editable: false,
				store: ['1', '2', '3']
			})
		},{
            menuDisabled : true,
			text: 'Стоимость разработки',
			dataIndex: 'price',
			sortable: false,
			flex: 1,
            renderer: function(v){
                if (v) {
                   return v + ',00 рублей';
                } else {
                    return '';
                }

            }
		}];
		me.store = 'RandDStore';


		me.rowEditing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 2,
            listeners: {
                edit: function (editor, context, eOpts ) {
                    me.fireEvent('onchangetimerand', context.record);
                    me.fireEvent('onsetsuminvestments', context.grid);
                }
            }
        });

        me.plugins = [me.rowEditing];
        me.selType = 'rowmodel';

		me.tools = [{
			type: 'help',
			tooltip: 'Сюда подсказку (например: двойной клик для редактрирования)'
		}];

		me.stripeRows = true;

        me.dockedItems = Ext.create('Ext.ux.statusbar.StatusBar', {
            itemId: 'itemId_statusBar',
            dock: 'bottom',
            cls: 'grid-statusbar',
            layout: 'column',
            defaultType: 'container',
            items: [{
                columnWidth: 0.61,
                layout: {
                    type: 'hbox',
                    pack: 'end'
                },
                items: [{
                    xtype: 'label',
                    text: 'Сумма инвестиций:',
                    cls: 'text-statusbar'
                }]
            },{
                columnWidth: 0.39,
                items: [{
                    itemId: 'itemId_sumInvestments',
                    xtype: 'label',
                    text: '0',
                    cls: 'text-statusbar'
                }]
            }]
        });

        me.listeners = {
            afterrender: {
                fn: function(grid){
                    me.fireEvent('onsetsuminvestments', grid)
                }
            }
        };

		me.callParent();

	}

});
