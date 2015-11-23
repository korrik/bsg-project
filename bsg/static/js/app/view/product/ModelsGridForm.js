//Ext.define('Bsg.view.product.ModelsGridForm',{
//	extend: 'Ext.panel.Panel',
//
//	xtype: 'modelsgridform',
//
//	alias: 'widget.ModelsGridForm',
//
//	autoScroll: true,
//
//	initComponent: function() {
//		var me = this;
//
//		me.store = 'ProductStore';
//		me.bodyPadding = 5;
//        me.layout = 'column';
//
//
//		me.items = [{
//			xtype: 'gridpanel',
//			columnWidth: 0.75,
//			store: me.store,
//			title: 'Существующие продукты',
//			tools:[{
//				type: 'help',
//				tooltip: 'Сюда подсказку'
//			}],
//			columns: [{
//				text: 'Модель',
//				dataIndex: 'name',
//				sortable: true,
//				minWidth: 200,
//				maxWidth: 300,
//				align: 'center',
//				flex: 1
//			},{
//				text: 'Функции',
//				width: '85%',
//				layout: {
//                    type: 'vbox',
//                    align: 'left'
//				},
//				columns: [{
//					text: 'Интернет-соединение',
//					dataIndex: 'connect_module',
//					sortable: true,
//					maxWidth: 300,
//				},{
//					text: 'Задняя камера',
//					dataIndex: 'back_camera',
//					sortable: true,
//					maxWidth: 300,
//				},{
//					text: 'Модуль связи',
//					dataIndex: 'link_module',
//					sortable: true,
//					maxWidth: 300,
//				},{
//					text: 'Дисплей',
//					dataIndex: 'display',
//					sortable: true,
//					hidden: true,
//					flex: 1
//				},{
//					text: 'Тачскрин',
//					dataIndex: 'touch_screen',
//					sortable: true,
//					hidden: true,
//					flex: 1
//				},{
//					text: 'Батарея',
//					dataIndex: 'battery',
//					sortable: true,
//					hidden: true,
//					flex: 1
//				},{
//					text: 'Процессор',
//					dataIndex: 'processor',
//					sortable: true,
//					hidden: true,
//					flex: 1
//				},{
//					text: 'Корпус',
//					dataIndex: 'case',
//					sortable: true,
//					hidden: true,
//					flex: 1
//				}]
//			}]
//		},{
//			columnWidth: 0.25,
//			xtype: 'form',
//			itemId: 'itemId_formProduct',
//			margin: '0 0 0 10',
//			bodyPadding: 5,
//			fieldDefaults: {
//                labelWidth: 90,
//                anchor: '100%',
//                msgTarget: 'side',
//				editable: false,
//				labelAlign: 'top',
//				typeAhead: true,
//				triggerAction: 'all',
//				allowBlank: false
//            },
//			api: {
//				submit: provider.methods.create_product
//			},
//			layout: 'anchor',
//			title: 'Создание продукта',
//			defaultType: 'combobox',
//
//			items: [{
//				xtype: 'textfield',
//				name: 'name',
//				editable: true,
//				fieldLabel: 'Название продукта'
//			},{
//				name: 'connect_module',
//				fieldLabel: 'Интернет соединение',
//				store: [
//					['3G-модуль','3G-модуль'],
//					['LTE-модуль','LTE-модуль'],
//					['Нет','Нет']
//				]
//            },{
//				name: 'back_camera',
//				fieldLabel: 'Задняя камера',
//				store: [
//					['3мп','3мп'],
//					['5мп','5мп'],
//					['Нет','Нет']
//				]
//            },{
//				name: 'link_module',
//				fieldLabel: 'Модуль связи',
//				store: [
//					['Низкочастотный','Низкочастотный'],
//					['Высокочастотный','Высокочастотный']
//				]
//            },{
//				name: 'display',
//				fieldLabel: 'Дисплей',
//				store: [
//					['Низкое разрешение','Низкое разрешение'],
//					['Среднее разрешение','Среднее разрешение'],
//					['Высокое разрешение','Высокое разрешение'],
//				]
//            },{
//				name: 'touch_screen',
//				fieldLabel: 'Тачскрин',
//				store: [
//					['3,2','3,2'],
//					['4,3','4,3'],
//					['4,7','4,7']
//				]
//            },{
//				name: 'battery',
//				fieldLabel: 'Батарея',
//				store: [
//					['1350 mAh','1350 mAh'],
//					['1500 mAh','1500 mAh'],
//				]
//            },{
//				name: 'processor',
//				fieldLabel: 'Процессор',
//				store: [
//					['Базовый','Базовый'],
//					['Среднескоростной','Среднескоростной'],
//					['Высокоскорростной','Высокоскоростной']
//				]
//            },{
//				name: 'case',
//				fieldLabel: 'Корпус',
//				store: [
//					['Пластиковый','Пластиковый'],
//					['Металлический','Металлический'],
//					['Алюминиевый','Алюминиевый'],
//					['Высокопрочный и легкий углепластик','Высокопрочный и легкий углепластик']
//				]
//            }],
//
//			buttons: [{
//				text: 'Создать',
//				glyph: 'xf055@FontAwesome',
//				formBind: true,
//				handler: function() {
//					me.fireEvent('oncreateproduct', this.up('form'));
//				}
//			},{
//				text: 'Очистить',
//				glyph: 'xf12d@FontAwesome',
//				handler: function() {
//					me.fireEvent('onresetform', this.up('form'));
//				}
//			}]
//		}];
//
//		me.callParent();
//	}
//});


Ext.define('Bsg.view.product.ModelsGridForm',{
	extend: 'Ext.panel.Panel',

	xtype: 'modelsgridform',

	alias: 'widget.ModelsGridForm',

	autoScroll: true,

	initComponent: function() {
		var me = this;

		me.store = 'ProductStore';
		me.bodyPadding = 5;
        me.layout = 'column';


		me.items = [{
			xtype: 'gridpanel',
			columnWidth: 0.75,
			store: me.store,
			hideHeaders: true,
			title: 'Существующие продукты',
			tools:[{
				type: 'help',
				tooltip: 'Сюда подсказку'
			},{
				type: 'plus',
				tooltip: 'Добавить новый продукт',
				handler: function(){
					me.fireEvent('onviewformproduct', me);
				}
			}],
			columns: [{
				text: 'Продукты',
				dataIndex: 'name',
				sortable: true,
				align: 'center',
				flex: 1,
				renderer: function(v){
					return '<span class="grid-name-product">' + v + '</span>'
				},
				menuDisabled: true
			},{
				xtype: 'actioncolumn',
				width: 50,
				scope: me,
				menuDisabled: true,
				items: [{
					glyph: 'xf044@FontAwesome',
					glyphcss: 'action-col-glyph',
					tooltip: 'Изменить продукт',
					handler: function(grid, rowIndex, colIndex, item, e, record, row){
						me.fireEvent('onviewupdateform', me, record)
					}
				},{
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
		}],
			plugins: [{
                ptype: 'rowexpander',
				renderData: function(data){
					console.log(data)
				},
                rowBodyTpl : new Ext.XTemplate(
	            '<div class="div-table">',
	                '<div class="div-table-heading">',
	                    '<div class="div-table-cell">Функции</div>',
	                    '<div class="div-table-cell">Характеристики</div>',
	                    '<div class="div-table-cell">Обновленные характеристики</div>',
	                    '<div class="div-table-cell">Конечные характеристики</div>',
	                '</div>',
                    '<div class="div-table-row">',
                        '<div class="div-table-cell">Интернет-соединение</div>',
	                    '<div class="div-table-cell">{first_fk_connect_module}</div>',
	                    '<div class="div-table-cell">{second_fk_connect_module:this.renderEmptyValue}</div>',
	                    '<div class="div-table-cell">{result_fk_connect_module}</div>',
                    '</div>',
                    '<div class="div-table-row">',
                        '<div class="div-table-cell">Задняя камера</div>',
	                    '<div class="div-table-cell">{first_fk_back_camera}</div>',
	                    '<div class="div-table-cell">{second_fk_back_camera:this.renderEmptyValue}</div>',
	                    '<div class="div-table-cell">{result_fk_back_camera}</div>',
                    '</div>',
                    '<div class="div-table-row">',
                        '<div class="div-table-cell">Модуль связи</div>',
	                    '<div class="div-table-cell">{first_fk_link_module}</div>',
	                    '<div class="div-table-cell">{second_fk_link_module:this.renderEmptyValue}</div>',
	                    '<div class="div-table-cell">{result_fk_link_module}</div>',
	                '</div>',
                    '<div class="div-table-row">',
                        '<div class="div-table-cell">Дисплей</div>',
	                    '<div class="div-table-cell">{first_fk_display}</div>',
	                    '<div class="div-table-cell">{second_fk_display:this.renderEmptyValue}</div>',
	                    '<div class="div-table-cell">{result_fk_display}</div>',
                    '</div>',
                    '<div class="div-table-row">',
                        '<div class="div-table-cell">Тачскрин</div>',
	                    '<div class="div-table-cell">{first_fk_touch_screen}</div>',
	                    '<div class="div-table-cell">{second_fk_touch_screen:this.renderEmptyValue}</div>',
	                    '<div class="div-table-cell">{result_fk_touch_screen}</div>',
                    '</div>',
                    '<div class="div-table-row">',
                        '<div class="div-table-cell">Батарея</div>',
	                    '<div class="div-table-cell">{first_fk_battery}</div>',
	                    '<div class="div-table-cell">{second_fk_battery:this.renderEmptyValue}</div>',
	                    '<div class="div-table-cell">{result_fk_battery}</div>',
                    '</div>',
                    '<div class="div-table-row">',
                        '<div class="div-table-cell">Процессор</div>',
	                    '<div class="div-table-cell">{first_fk_processor}</div>',
	                    '<div class="div-table-cell">{second_fk_processor:this.renderEmptyValue}</div>',
	                    '<div class="div-table-cell">{result_fk_processor}</div>',
                    '</div>',
                    '<div class="div-table-row">',
                        '<div class="div-table-cell">Корпус</div>',
	                    '<div class="div-table-cell">{first_fk_case}</div>',
	                    '<div class="div-table-cell">{second_fk_case:this.renderEmptyValue}</div>',
	                    '<div class="div-table-cell">{result_fk_case}</div>',
                    '</div>',
                '</div>',
	                {
		                renderEmptyValue: function(v){
			                if (!v){
				                return 'Нет'
			                }
			                return v;
		                }
	                }
				)
            }],
		},{
			columnWidth: 0.25,
			xtype: 'form',
			itemId: 'itemId_formProduct',
			margin: '0 0 0 10',
			hidden: true,
			bodyPadding: 5,
			fieldDefaults: {
                labelWidth: 90,
                anchor: '100%',
                msgTarget: 'side',
				editable: false,
				labelAlign: 'top',
				typeAhead: true,
				triggerAction: 'all',
				allowBlank: false
            },
			api: {
				submit: provider.methods.create_product
			},
			layout: 'anchor',
			title: 'Создание продукта',
			defaultType: 'combobox',

			tools:[{
				type: 'close',
				tooltip: 'Закрыть',
				handler: function(){
					me.fireEvent('oncloseformproduct', me, 'itemId_formProduct');
				}
			}],

			items: [{
				xtype: 'textfield',
				name: 'name',
				editable: true,
				fieldLabel: 'Название продукта'
			},{
				name: 'connect_module',
				fieldLabel: 'Интернет соединение',
				store: [
					['3G-модуль','3G-модуль'],
					['LTE-модуль','LTE-модуль'],
					['Нет','Нет']
				]
            },{
				name: 'back_camera',
				fieldLabel: 'Задняя камера',
				store: [
					['3мп','3мп'],
					['5мп','5мп'],
					['Нет','Нет']
				]
            },{
				name: 'link_module',
				fieldLabel: 'Модуль связи',
				store: [
					['Низкочастотный','Низкочастотный'],
					['Высокочастотный','Высокочастотный']
				]
            },{
				name: 'display',
				fieldLabel: 'Дисплей',
				store: [
					['Низкое разрешение','Низкое разрешение'],
					['Среднее разрешение','Среднее разрешение'],
					['Высокое разрешение','Высокое разрешение'],
				]
            },{
				name: 'touch_screen',
				fieldLabel: 'Тачскрин',
				store: [
					['3,2','3,2'],
					['4,3','4,3'],
					['4,7','4,7']
				]
            },{
				name: 'battery',
				fieldLabel: 'Батарея',
				store: [
					['1350 mAh','1350 mAh'],
					['1500 mAh','1500 mAh'],
				]
            },{
				name: 'processor',
				fieldLabel: 'Процессор',
				store: [
					['Базовый','Базовый'],
					['Среднескоростной','Среднескоростной'],
					['Высокоскорростной','Высокоскоростной']
				]
            },{
				name: 'case',
				fieldLabel: 'Корпус',
				store: [
					['Пластиковый','Пластиковый'],
					['Металлический','Металлический'],
					['Алюминиевый','Алюминиевый'],
					['Высокопрочный и легкий углепластик','Высокопрочный и легкий углепластик']
				]
            }],

			buttons: [{
				text: 'Создать',
				glyph: 'xf055@FontAwesome',
				formBind: true,
				handler: function() {
					me.fireEvent('oncreateproduct', this.up('form'));
				}
			},{
				text: 'Очистить',
				glyph: 'xf12d@FontAwesome',
				handler: function() {
					me.fireEvent('onresetform', this.up('form'));
				}
			}]
		},{
			columnWidth: 0.25,
			xtype: 'form',
			itemId: 'itemId_formUpdateProduct',
			margin: '0 0 0 10',
			bodyPadding: 5,
			hidden: true,
			fieldDefaults: {
                labelWidth: 90,
                anchor: '100%',
                msgTarget: 'side',
				editable: false,
				labelAlign: 'top',
				typeAhead: true,
				triggerAction: 'all',
				allowBlank: false
            },
			api: {
				submit: provider.methods.update_product
			},
			layout: 'anchor',
			title: 'Изменить продукт',
			defaultType: 'combobox',

			tools:[{
				type: 'close',
				tooltip: 'Закрыть',
				handler: function(){
					me.fireEvent('oncloseformproduct', me, 'itemId_formUpdateProduct');
				}
			}],

			items: [{
				xtype: 'numberfield',
				hidden: true,
				name: 'id'
			},{
				xtype: 'textfield',
				name: 'name',
				editable: true,
				fieldLabel: 'Название продукта'
			},{
				name: 'first_fk_connect_module',
				fieldLabel: 'Интернет соединение',
				store: [
					['3G-модуль','3G-модуль'],
					['LTE-модуль','LTE-модуль'],
					['Нет','Нет']
				]
            },{
				name: 'first_fk_back_camera',
				fieldLabel: 'Задняя камера',
				store: [
					['3мп','3мп'],
					['5мп','5мп'],
					['Нет','Нет']
				]
            },{
				name: 'first_fk_link_module',
				fieldLabel: 'Модуль связи',
				store: [
					['Низкочастотный','Низкочастотный'],
					['Высокочастотный','Высокочастотный']
				]
            },{
				name: 'first_fk_display',
				fieldLabel: 'Дисплей',
				store: [
					['Низкое разрешение','Низкое разрешение'],
					['Среднее разрешение','Среднее разрешение'],
					['Высокое разрешение','Высокое разрешение'],
				]
            },{
				name: 'first_fk_touch_screen',
				fieldLabel: 'Тачскрин',
				store: [
					['3,2','3,2'],
					['4,3','4,3'],
					['4,7','4,7']
				]
            },{
				name: 'first_fk_battery',
				fieldLabel: 'Батарея',
				store: [
					['1350 mAh','1350 mAh'],
					['1500 mAh','1500 mAh'],
				]
            },{
				name: 'first_fk_processor',
				fieldLabel: 'Процессор',
				store: [
					['Базовый','Базовый'],
					['Среднескоростной','Среднескоростной'],
					['Высокоскорростной','Высокоскоростной']
				]
            },{
				name: 'first_fk_case',
				fieldLabel: 'Корпус',
				store: [
					['Пластиковый','Пластиковый'],
					['Металлический','Металлический'],
					['Алюминиевый','Алюминиевый'],
					['Высокопрочный и легкий углепластик','Высокопрочный и легкий углепластик']
				]
            }],

			buttons: [{
				text: 'Сохранить',
				glyph: 'xf0c7@FontAwesome',
				formBind: true,
				handler: function() {
					me.fireEvent('onupdateproduct', this.up('form'));
				}
			},{
				text: 'Очистить',
				glyph: 'xf12d@FontAwesome',
				handler: function() {
					me.fireEvent('onresetform', this.up('form'));
				}
			}]
		}];

		me.callParent();
	}
});