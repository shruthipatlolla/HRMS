Ext.define('HRMS.view.user.Root', {
			extend : 'Ext.panel.Panel',
			alias : 'widget.root',
			itemId : 'rootBar',
			title : 'Welcome',
			layout : 'card',
			activeItem : 0,
			items : [{

						id : 'card-0',
						xtype : 'login'
					}, {
						id : 'card-1',

						xtype : 'register'
					}, {
						id : 'card-2',

						xtype : 'pForm'
					},
					{
						id : 'card-3',

						xtype : 'ptGrid'
					}]
		});
