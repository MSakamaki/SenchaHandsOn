Ext.define('myapp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'myapp.view.List',
        'myapp.view.Edit'
    ],
    config: {
        layout: 'card',
        items: [{
            xtype: 'memo-list'
        },{
            xtype: 'memo-edit'
        }]
    }
});
