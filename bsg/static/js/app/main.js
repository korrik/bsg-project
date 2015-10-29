Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false
});
Ext.Loader.setPath('Ext', '/static/extjs/build/');
Ext.Loader.setPath('Ext.ux', '/static/extjs/build/examples/ux');
Ext.Loader.setPath('Bsg', '/static/js/app');

//Все контейнеры верхнего уровня необходимо объявить тут!
Ext.require([
    'Bsg.view.main.MainContainer',
]);

Ext.application({
    name: 'Bsg',

    controllers: [
        'ViewController',
        'MainController'
    ],


    appFolder: '/static/js/app',

    launch: function() {
        Ext.create('Bsg.view.Viewport').show();
    }
});
