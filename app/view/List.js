Ext.define('myapp.view.List',{
	extend: 'Ext.dataview.List',
	xtype: 'memo-list',
	config: {
		itemTpl: '{text}-{update}',
		data: [
			{text: 'sampple1', update: '2013/02/17 21:00'},
			{text: 'sampple2', update: '2013/02/19 21:10'},
			{text: 'sampple3', update: '2013/02/22 21:25'},
			{text: 'sampple4', update: '2013/02/24 22:25'},
			{text: 'sampple5', update: '2013/02/25 24:15'}
		]
	}
});