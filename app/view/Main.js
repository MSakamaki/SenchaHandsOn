Ext.define('myapp.view.Main', {
    //extend: 'Ext.tab.Panel',
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        items: [{
            xtype: 'button',
            text: 'SampleButton1'
        },{
            xtype: 'button',
            text: 'SampleButton2'
        }]
    }
});
