Ext.define('myapp.store.Notes',{
	extend: 'Ext.data.Store',
	requires: [
		'myapp.model.Note'
	],
	config:{
		model: 'myapp.model.Note',
		data: [
			{text: 'sample1', update: '2013/02/17 21:00'},
			{text: 'sample2', update: '2013/02/19 21:10'},
			{text: 'sample3', update: '2013/02/22 21:25'},
			{text: 'sample4', update: '2013/02/24 22:25'},
			{text: 'sample5', update: '2013/02/25 24:15'}
		]
	}
});