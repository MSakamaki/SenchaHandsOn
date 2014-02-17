Ext.define('myapp.view.Edit',{
	extend: 'Ext.form.Panel',
	xtype: 'memo-edit',
	config: {
		items: [/*{
			xtype: 'textareafield',
			fieldLabel: 'memo',
			name: 'text',
			height: 400
		}, {
			xtype: 'textfield',
			fieldLabel: 'update',
			name: 'update',
			readOnly: true
		}, */{
			xtype: 'toolbar',
			docked: 'top',
			items: [{
				text: 'Back'
			},{ xtype: 'spacer' },{
				text: 'Save'
			}]
		}]
	}
});