Ext.define('myapp.model.Note',{
	extend: 'Ext.data.Model',
	config: {
		fields: [
			'text',
			'update'
		],
		proxy:{
			type: 'memory'
		}
	}
});