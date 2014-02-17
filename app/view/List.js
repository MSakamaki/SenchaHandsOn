Ext.define('myapp.view.List',{
	extend: 'Ext.dataview.List',
	xtype: 'memo-list',
	config: {
		/* ellipsis(5) [sampleX] for view string [sa...] */
		itemTpl: '{text:ellipsis(5)} - {update}',
		store: 'Notes',
		items:[{
			xtype: 'titlebar',
			docked: 'top',
			title: 'memo',
			item: [{
				xtype: 'button',
				text: 'New',
				align: 'right'
			}]
		}]
	}
});