Ext.define('myapp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'myapp.view.List'
    ],
    config: {
        layout: 'card',
        items: [{
            xtype: 'memo-list'
        }]
    }
});
