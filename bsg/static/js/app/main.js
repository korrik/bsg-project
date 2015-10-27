Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false
});
Ext.Loader.setPath('Ext', '/static/extjs/build/');
Ext.Loader.setPath('Ext.ux', '/static/extjs/build/examples/ux');
Ext.Loader.setPath('Books', '/static/js/app');

//Все контейнеры верхнего уровня необходимо объявить тут!
Ext.require([

]);

Ext.application({
    name: 'Bsg',

    controllers: [
        'ViewController',
    ],


    appFolder: '/static/js/app',

    launch: function() {
        Ext.create('Bsg.view.Viewport').show();
    }
});
