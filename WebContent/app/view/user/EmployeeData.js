Ext.define('HRMS.view.user.EmployeeData', {
			extend : 'Ext.form.Panel',
			alias : 'widget.employeeData',
			itemId : 'register',
			title : 'Employee Data',
			bodyPadding : '5',
			buttonAlign : 'center',
			border : false,
			trackResetOnLoad : true,
			url : 'hrms/empData',

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
						xtype : 'fieldcontainer',
						layout : 'vbox',
						defaultType : 'textfield',
						width : '100%',
						fieldDefaults : {
							labelAlign : 'left',
							labelStyle : 'font-weight:bold'
						},
						items : [/*{
									fieldLabel : 'Employee Name',

									name : 'userName',
									id : 'name',

									allowBlank : false
								}, */{
									xtype : 'combo',
									fieldLabel : 'Employee Name',
									hiddenName : 'name',
									valueField : 'value',
									displayField : 'text',
									triggerAction : 'all',
									name : 'name',
									itemId:'empCombo',
									//forceSelection : true,
									//queryMode : 'local',
									editable : false,
									allowBlank : false,
									store : 'EmpList'
									/*listeners: {
										            itemclick: function(list, record) {
                alert(record.get('name') + ' clicked');
            }
										
            select:function (combo, record, index){
            	alert(record);
                emp.fireEvent('empData', {
                	record:record,
                	combo:combo,
                	index:index
								
												});
            }
        }*/

								}, {
									name : 'userId',

									fieldLabel : 'Employee Id',
									value : ''

								}, {
									name : 'status',
									fieldLabel : 'Status',
									value : ''
									// vtype: 'email',
								// msgTarget: 'side',
							}	, {

									fieldLabel : 'EDC',

									name : 'edc',
									value : ''
									// maskRe: /[0-9]/

							}	, {
									name : 'bhr',
									fieldLabel : 'Business HR',
									value : ''
									// vtype:'IPAddress',
							}	, {
									name : 'level',
									// inputType:'password',

									fieldLabel : 'Level',
									value : ''

								}, {
									name : 'doj',
									xtype : 'datefield',
									fieldLabel : 'Date Of Joining',
									maxValue : new Date(),
									value : ''

								}, {
									name : 'designation',
									value : '',
									fieldLabel : 'Designation'

								}, {
									name : 'directManager',
									value : '',
									fieldLabel : 'Direct Manager'

								}, {
									name : 'indirectManager',
									value : '',
									fieldLabel : 'Indirect Manager'

								}, {
									name : 'quarter',
									value : '',
									fieldLabel : 'Quarter'

								}, {
									name : 'year',
									xtype : 'numberfield',
									fieldLabel : 'Year'
									//value : new Date().format('Y')


								}, {
									name : 'dor',
									xtype : 'datefield',
									fieldLabel : 'Date Of Resignation',
								value : ''
								}

						/*
						 * { xtype : 'combo', fieldLabel : 'Select a Question',
						 * hiddenName : 'question', store : new
						 * Ext.data.SimpleStore({ data : [[1, 'What was the name
						 * of your first school'], [2, 'first pets name']],
						 * 
						 * id : 0, fields : ['value', 'text'] }), valueField :
						 * 'value', displayField : 'text', triggerAction :
						 * 'all', name:'state', editable : false }
						 */

						]
					}

			]
		
		});
