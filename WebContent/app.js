Ext.application({
			// requires : ['Ext.container.Viewport'],
			// autoCreateViewport: true,
			name : "HRMS",
			appFolder : "app",

			views : ['user.Login','user.SecQuestion','user.QuestionCombo',
			'user.Register','user.Root','user.EmployeeData',
			'user.PredictabilityTracking','user.PredictabilityForm','user.PTGrid',
			'user.SearchTrigger'],
			controllers : ['Users'],

			launch : function() {

				Ext.create('Ext.container.Viewport', {
							layout : 'fit',
							renderTo: Ext.getBody(), 
							items : [{
										xtype : 'root'
									}]
						});

			}

		});
