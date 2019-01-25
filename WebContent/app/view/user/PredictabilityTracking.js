Ext.define('HRMS.view.user.PredictabilityTracking', {
			extend : 'Ext.form.Panel',
			alias : 'widget.pt',
			itemId : 'register',
			title : 'Predictability Tracking',
			bodyPadding : '5',
			buttonAlign : 'center',
			border : false,
			trackResetOnLoad : true,
			//url : 'hrms/empData',

			/*layout : {
				type : 'vbox'
			},
			fieldDefaults : {
				xtype : 'textfield',
				msgTarget : 'side',
				labelAlign : 'left',
				labelStyle : 'font-weight:bold'
			},*/
			items : [{
									xtype : 'combo',
									fieldLabel : 'Predictability Status',
									hiddenName : 'status',
									valueField : 'value',
									displayField : 'text',
									triggerAction : 'all',
									name : 'status',
									itemId:'status',
									//forceSelection : true,
									//queryMode : 'local',
									editable : false,
									allowBlank : false,
									//store : 'EmpList'
									store : new Ext.data.SimpleStore({
								data : [['Certain', 'Certain'], ['Uncertain', 'Uncertain']],

								id : 0,
								fields : ['value', 'text']
							})

								},
								{
									xtype : 'combo',
									fieldLabel : 'Primary Reason',
									hiddenName : 'pReason',
									valueField : 'value',
									displayField : 'text',
									triggerAction : 'all',
									name : 'pReason',
									itemId:'pReason',
									//forceSelection : true,
									//queryMode : 'local',
									editable : false,
									allowBlank : false,
									//store : 'EmpList'
									store : new Ext.data.SimpleStore({
								data : [['abc', 'abc'], ['xyz', 'xyz']],

								id : 0,
								fields : ['value', 'text']
							})

								},
								{
									xtype : 'combo',
									fieldLabel : 'secondary Reason',
									hiddenName : 'sReason',
									valueField : 'value',
									displayField : 'text',
									triggerAction : 'all',
									name : 'sReason',
									itemId:'sReason',
									//forceSelection : true,
									//queryMode : 'local',
									editable : false,
									//store : 'EmpList'
									store : new Ext.data.SimpleStore({
								data : [['abc', 'abc'], ['xyz', 'xyz']],

								id : 0,
								fields : ['value', 'text']
							})

								},
								{
									xtype : 'combo',
									fieldLabel : 'Probable Attrition Category',
									hiddenName : 'category',
									valueField : 'value',
									displayField : 'text',
									triggerAction : 'all',
									name : 'category',
									itemId:'category',
									//forceSelection : true,
									//queryMode : 'local',
									editable : false,
									allowBlank : false,
									//store : 'EmpList'
									store : new Ext.data.SimpleStore({
								data : [['abc', 'abc'], ['xyz', 'xyz']],

								id : 0,
								fields : ['value', 'text']
							})

								},
								{
									xtype : 'combo',
									fieldLabel : 'Criticality',
									hiddenName : 'criticality',
									valueField : 'value',
									displayField : 'text',
									triggerAction : 'all',
									name : 'criticality',
									itemId:'criticality',
									//forceSelection : true,
									//queryMode : 'local',
									editable : false,
									allowBlank : false,
									//store : 'EmpList'
									store : new Ext.data.SimpleStore({
								data : [['abc', 'abc'], ['xyz', 'xyz']],

								id : 0,
								fields : ['value', 'text']
							})

								},
								{
									xtype : 'combo',
									fieldLabel : 'Action Planned By Manager(1)',
									hiddenName : 'actManager1',
									valueField : 'value',
									displayField : 'text',
									triggerAction : 'all',
									name : 'actManager1',
									itemId:'actManager1',
									//forceSelection : true,
									//queryMode : 'local',
									editable : false,
									allowBlank : false,
									//store : 'EmpList'
									store : new Ext.data.SimpleStore({
								data : [['abc', 'abc'], ['xyz', 'xyz']],

								id : 0,
								fields : ['value', 'text']
							})

								},
								{
									xtype : 'combo',
									fieldLabel : 'Action Planned By Manager(2) if any',
									hiddenName : 'actManager2',
									valueField : 'value',
									displayField : 'text',
									triggerAction : 'all',
									name : 'actManager2',
									itemId:'actManager2',
									//forceSelection : true,
									//queryMode : 'local',
									editable : false,
									//store : 'EmpList'
									store : new Ext.data.SimpleStore({
								data : [['abc', 'abc'], ['xyz', 'xyz']],

								id : 0,
								fields : ['value', 'text']
							})

								},
								{
									xtype : 'combo',
									fieldLabel : 'Status Of Action Plan',
									hiddenName : 'statusOfAct',
									valueField : 'value',
									displayField : 'text',
									triggerAction : 'all',
									name : 'statusOfAct',
									itemId:'statusOfAct',
									//forceSelection : true,
									//queryMode : 'local',
									editable : false,
									allowBlank : false,
									//store : 'EmpList'
									store : new Ext.data.SimpleStore({
								data : [['abc', 'abc'], ['xyz', 'xyz']],

								id : 0,
								fields : ['value', 'text']
							})

								}]
			
		
		});
