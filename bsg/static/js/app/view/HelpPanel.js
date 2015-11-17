Ext.define('Bsg.view.HelpPanel',{
    extend: 'Ext.panel.Panel',

    initComponent: function() {
        var me = this;
        this.html = 'Вставить сюда текст описания работы приложения и в частности квартала! ' +
            'Для красоты отображения текста можно использовать любые инструменты HTML + CSS';
        this.callParent();
    }
});