Ext.define('HRMS.view.user.Register', {
	extend : 'Ext.form.Panel',
	alias : 'widget.register',
itemId:'register',
	title : 'Register here',
	bodyPadding : '5',
	buttonAlign : 'center',
	border : false,
	trackResetOnLoad : true,
	url : 'hrms/createUser',


	layout : {
		type : 'vbox'
	},
	fieldDefaults : {
		xtype : 'textfield',
		msgTarget : 'side',
		labelAlign : 'left',
		labelStyle : 'font-weight:bold'
	},
	items : [{
		xtype : 'fieldcontainer',
		layout : 'vbox',
		defaultType : 'textfield',
		width : '100%',
		fieldDefaults : {
			labelAlign : 'left',
			labelStyle : 'font-weight:bold'
		},
		items : [{
					fieldLabel : 'Employee Name',

					name : 'userName',
					id : 'name',



					allowBlank : false
				}, {
					name : 'userId',

					fieldLabel : 'Employee Id',
					allowBlank : false

				},
				{
					name : 'password',
					inputType:'password',
					fieldLabel : 'Password',
					allowBlank : false

				},
            {
					xtype : 'combo',
					fieldLabel : 'Status',
					hiddenName : 'status',
					store : new Ext.data.SimpleStore({
								data : [['Active', 'Active'], ['Inactive', 'Inactive']],

								id : 0,
								fields : ['value', 'text']
							}),
					valueField : 'value',
					displayField : 'text',
					triggerAction : 'all',
					name:'status',
					editable : false,
					allowBlank: false
				},
             /*{
               

					fieldLabel : 'EDC',

					name : 'edc',
					allowBlank : false
					//maskRe: /[0-9]/

				},*/
				{
					xtype : 'combo',
					fieldLabel : 'EDC',
					hiddenName : 'edc',
					store : new Ext.data.SimpleStore({
								data : [['BDC', 'BDC'], ['HDC', 'HDC'],['MDC','MDC']],

								id : 0,
								fields : ['value', 'text']
							}),
					valueField : 'value',
					displayField : 'text',
					triggerAction : 'all',
					name:'edc',
					editable : false,
					allowBlank: false
				},
            {
                               name : 'bhr',
                                fieldLabel: 'Business HR',
                             // vtype:'IPAddress',
                               allowBlank: false
                           },
                           
				{
					xtype : 'combo',
					fieldLabel : 'Level',
					hiddenName : 'level',
					store : new Ext.data.SimpleStore({
								data : [['L1', 'L1'], ['L2', 'L2']],

								id : 0,
								fields : ['value', 'text']
							}),
					valueField : 'value',
					displayField : 'text',
					triggerAction : 'all',
					name:'level',
					editable : false,
					allowBlank: false
				},
				{
					name : 'doj',
					xtype:'datefield',
					fieldLabel : 'Date Of Joining',
					allowBlank : false,
					maxValue: new Date()

				},
				{
					name : 'designation',

					fieldLabel : 'Designation',
					allowBlank : false

				},
				{
					name : 'directManager',

					fieldLabel : 'Direct Manager',
					allowBlank : false

				},
				{
					name : 'indirectManager',

					fieldLabel : 'Indirect Manager',
					allowBlank : false

				}
/*{
					name : 'quarter',

					fieldLabel : 'Quarter',
					allowBlank : false

				},
				{
					name : 'year',
					xtype: 'numberfield',
					fieldLabel : 'Year',
					allowBlank : false

				},
				{
					name : 'dor',
					xtype:'datefield',
					fieldLabel : 'Date Of Resignation',
					allowBlank : false

				}*/
				
				 /*{
					xtype : 'combo',
					fieldLabel : 'Select a Question',
					hiddenName : 'question',
					store : new Ext.data.SimpleStore({
								data : [[1, 'What was the name of your first school'], [2, 'first pets name']],

								id : 0,
								fields : ['value', 'text']
							}),
					valueField : 'value',
					displayField : 'text',
					triggerAction : 'all',
					name:'state',
					editable : false
				}*/
				
]
	}

	],
	buttons : [{
				text : 'Save',
				itemId : 'btnSave',
				action: 'save'

			}, {
				text : 'Reset',
				itemId : 'btnReset'
				
			},
			{
				text : 'Back',
				itemId : 'btnBack'
			}]

});

