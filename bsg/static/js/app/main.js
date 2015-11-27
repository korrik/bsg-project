Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false
});
Ext.Loader.setPath('Ext', '/static/extjs/build/');
Ext.Loader.setPath('Ext.ux', '/static/extjs/build/examples/ux');
Ext.Loader.setPath('Bsg', '/static/js/app');

//Все контейнеры верхнего уровня необходимо объявить тут!
Ext.require([
    'Ext.ux.statusbar.StatusBar',

    'Bsg.view.main.MainContainer',
    'Bsg.view.company.CompanyContainer',
    'Bsg.view.product.ProductContainer'
]);

Ext.application({
    name: 'Bsg',

    controllers: [
        'ViewController',
        'MainController',
        'CompanyController',
        'ProductController'
    ],


    appFolder: '/static/js/app',

    launch: function() {
        Ext.create('Bsg.view.Viewport').show();
    }
});

Ext.grid.RowEditor.override({
    updateButton: function(valid){
        //очистили метод!
    }
});

Ext.grid.column.Action.override({
    defaultRenderer: function(v, meta, record, rowIdx, colIdx, store, view){
        var me = this,
            prefix = Ext.baseCSSPrefix,
            scope = me.origScope || me,
            items = me.items,
            len = items.length,
            i = 0,
            item, ret, disabled, tooltip, glyph, glyphParts, glyphFontFamily;

        // Allow a configured renderer to create initial value (And set the other values in the "metadata" argument!)
        // Assign a new variable here, since if we modify "v" it will also modify the arguments collection, meaning
        // we will pass an incorrect value to getClass/getTip
        ret = Ext.isFunction(me.origRenderer) ? me.origRenderer.apply(scope, arguments) || '' : '';

        meta.tdCls += ' ' + Ext.baseCSSPrefix + 'action-col-cell';
        for (; i < len; i++) {
            item = items[i];

            disabled = item.disabled || (item.isDisabled ? item.isDisabled.call(item.scope || scope, view, rowIdx, colIdx, item, record) : false);
            tooltip = disabled ? null : (item.tooltip || (item.getTip ? item.getTip.apply(item.scope || scope, arguments) : null));
            glyph = item.glyph;

            //
            glyphcss = item.glyphcss;

            // Only process the item action setup once.
            if (!item.hasActionConfiguration) {

                // Apply our documented default to all items
                item.stopSelection = me.stopSelection;
                item.disable = Ext.Function.bind(me.disableAction, me, [i], 0);
                item.enable = Ext.Function.bind(me.enableAction, me, [i], 0);
                item.hasActionConfiguration = true;
            }

            if (glyph) {
                if (typeof glyph === 'string') {
                    glyphParts = glyph.split('@');
                    glyph = glyphParts[0];
                    glyphFontFamily = glyphParts[1];
                } else {
                    glyphFontFamily = Ext._glyphFontFamily;
                }

                if (glyphcss) {
                    ret += '<span role="button" title="' + (item.altText || me.altText) + '" class="' + prefix + 'action-col-icon ' + prefix + glyphcss + ' ' + prefix + 'action-col-' + String(i) + ' ' + (disabled ? prefix + 'item-disabled' : ' ') +
                        ' ' + (Ext.isFunction(item.getClass) ? item.getClass.apply(item.scope || scope, arguments) : (item.iconCls || me.iconCls || '')) + '"' +
                        ' style="font-family:' + glyphFontFamily + '"' +
                        (tooltip ? ' data-qtip="' + tooltip + '"' : '') + '>&#' + glyph + ';</span>';
                } else {
                    ret += '<span role="button" title="' + (item.altText || me.altText) + '" class="' + prefix + 'action-col-icon ' + prefix + 'action-col-glyph ' + prefix + 'action-col-' + String(i) + ' ' + (disabled ? prefix + 'item-disabled' : ' ') +
                        ' ' + (Ext.isFunction(item.getClass) ? item.getClass.apply(item.scope || scope, arguments) : (item.iconCls || me.iconCls || '')) + '"' +
                        ' style="font-family:' + glyphFontFamily + '"' +
                        (tooltip ? ' data-qtip="' + tooltip + '"' : '') + '>&#' + glyph + ';</span>';
                }
            } else {
                ret += '<img role="button" alt="' + (item.altText || me.altText) + '" src="' + (item.icon || Ext.BLANK_IMAGE_URL) +
                    '" class="' + prefix + 'action-col-icon ' + prefix + 'action-col-' + String(i) + ' ' + (disabled ? prefix + 'item-disabled' : ' ') +
                    ' ' + (Ext.isFunction(item.getClass) ? item.getClass.apply(item.scope || scope, arguments) : (item.iconCls || me.iconCls || '')) + '"' +
                    (tooltip ? ' data-qtip="' + tooltip + '"' : '') + ' />';
            }
        }
        return ret;
    }
});