Ext.define('myapp.controller.Main',{
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			main: 'main',
			list: 'memo-list'
		},
		control: {
			'memo-list': {
				select: 'onSelect'
			},
			'memo-edit button[ui-back]': {
				tap: 'onBack'
			}
		}
	},
	onBack: function(){
		console.log('on Back!!');
		this.getMain().setActiveItem(1);
	},
	onSelect: function(){
		console.log('on Select!!');
		this.getMain().setActiveItem(0);
	}

})