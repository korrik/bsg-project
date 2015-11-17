Ext.define('Bsg.view.company.OffersGrid',{
	extend: 'Ext.grid.Panel',
	cls: 'grid-box',
	xtype: 'offersgrid',
	alias: 'widget.OffersGrid',

	initComponent: function(){
		var me = this;

		me.title = 'Ценностные предложения';
		me.hideHeaders = true;
		me.columns = [{
			text: 'Наименование',
			dataIndex: 'name',
			sortable: false,
			flex: 1,
			editor: {allowBlank: false}
		},{
			xtype: 'actioncolumn',
			width: 25,
			scope: me,
			items: [{
				glyph: 'xf014@FontAwesome',
				glyphcss: 'action-col-trash',
				tooltip: 'Удалить',
				handler: function(grid, rowIndex, colIndex, item, e, record, row){
					Ext.MessageBox.confirm('Подтверждение', 'Вы уверены, что хотите удалить ' +
						record.get('name')+ '?', onDeleteRecord);
					function onDeleteRecord(btn){ if (btn == 'yes')  {
							record.set('hidden', true);
							me.getStore().load();
						}
					}
				}
			}]
		}];
		me.store = 'OffersStore';


		me.rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            clicksToMoveEditor : 2,
            autoCancel: false,
            errorSummary: false,
            listeners: {
                canceledit: function ( editor, context, eOpts ) {
                    me.getStore().reload();
                }
            }
        });

        me.plugins = [me.rowEditing];
        me.selType = 'rowmodel';

		me.tools = [{
			type: 'help',
			tooltip: 'Сюда подсказку'
		},{
			type:'plus',
			tooltip: 'Добавить предложение',
			handler: function(){
				me.fireEvent('onaddoffers', me);
			}
		}];

		me.stripeRows = true;
		me.callParent();
	}

});
