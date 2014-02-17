Ext.define('myapp.view.List',{
	extend: 'Ext.dataview.List',
	xtype: 'memo-list',
	config: {
		/* ellipsis(5) [sampleX] for view string [sa...] */
		itemTpl: '{text:ellipsis(5)} - {update}'
	}
});