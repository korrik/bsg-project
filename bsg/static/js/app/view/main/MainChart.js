Ext.define('Bsg.view.main.MainChart',{
	extend: 'Ext.Panel',

	xtype: 'mainchart',
	alias: 'widget.MainChart',


	initComponent: function(){
		var me = this;

        me.myDataStore = Ext.create('Ext.data.JsonStore', {
            fields: ['os', 'data1' ],
            data: [
                { os: 'Android', data1: 63.3 },
                { os: 'iOS', data1: 17.9 },
                { os: 'Windows Phone', data1: 10.2 },
                { os: 'BlackBerry', data1: 1.7 },
                { os: 'Others', data1: 5.9 }
            ]
        });

        me.items = [{
            xtype: 'polar',
            width: '100%',
            height: 500,
            store: this.myDataStore,
            insetPadding: 50,
            innerPadding: 20,
            legend: {
                docked: 'bottom'
            },
            interactions: ['rotate', 'itemhighlight'],
            series: [{
                type: 'pie',
                angleField: 'data1',
                label: {
                    field: 'os',
                    display: 'outside',
                    calloutLine: {
                        length: 60,
                        width: 3
                        // specifying 'color' is also possible here
                    }
                },
                highlight: true,
                tooltip: {
                    trackMouse: true,
                    renderer: function(storeItem, item) {
                        this.setHtml(storeItem.get('os') + ': ' + storeItem.get('data1') + '%');
                    }
                }
            }]
        }];

        this.callParent();

	}

});