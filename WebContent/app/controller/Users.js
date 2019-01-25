Ext.define('HRMS.controller.Users', {
			extend : 'Ext.app.Controller',
			views : ['user.Login', 'user.SecQuestion', 'user.QuestionCombo',
					'user.Register', 'user.Root', 'user.EmployeeData','user.PredictabilityTracking',
					'user.PredictabilityForm','user.PTGrid','user.SearchTrigger'],
			stores : ['Login', 'SecQuestion', 'Questions', 'EmpList',
					'EmployeeData','PTGrid'],
			models : ['Login', 'Questions', 'EmpList','PTGrid'],

			refs : [{
						ref : 'loginForm',
						xtype : 'login',
						selector : ' login'
					}, {
						ref : 'registerForm',
						xtype : 'register',
						selector : ' register'
					}, {
						ref : 'employeeDataForm',
						xtype : 'employeeData',
						selector : 'employeeData'
					}, {
						ref : 'empCombo',
						selector : '#empCombo'
					}],
			init : function() {

				this.control({

							'login button[itemId=btnLogin]' : {
								click : this.onLogin
							},
							'login button[itemId=btnReset]' : {
								click : this.onResetClickLogin
							},
							'login button[itemId=btnRegister]' : {
								click : this.onRegister
							},
							'register button[itemId=btnSave]' : {
								click : this.onSave
							},

							'employeeData [itemId=empCombo]' : {
								select : this.comboOnSelect
							}

						});

			},
			/*
			 * empData:function(evtData){ alert("empdata");
			 * alert(evtData.record); var empListStore = this.getEmpListStore();
			 * var record = empListStore.getAt(evtData.rowIndex); var
			 * emptyGridstore = this.getEmptyGridStore();
			 * emptyGridstore.insert(0, record);
			 * //Ext.getCmp('emptyGrid').refresh(); alert("added");
			 *  },
			 */
			comboOnSelect : function(record) {
				var name = this.getEmpCombo().getValue();
				alert(name);
				var form = this.getEmployeeDataForm().getForm();
			//this.getEmployeeDataForm().getForm().findField('userId').setValue("V2");

				// var form = this.up('employeeData').getForm();
				// var store = this.getEmployeeDataStore();
				// store.load({
				form.submit({
							params : {
								data : name
							},
							success : function(form, action) {
								// response --> response.responseText
								Ext.Msg.alert('Success', action.result.result.userName);
								form.findField('userId').setValue(action.result.result.userId);
								form.findField('edc').setValue(action.result.result.edc);
								form.findField('doj').setValue(action.result.result.doj);
								form.findField('doj').setValue(action.result.result.doj);
								form.findField('doj').setValue(action.result.result.doj);
								form.findField('designation').setValue(action.result.result.designation);
								form.findField('level').setValue(action.result.result.level);
								form.findField('bhr').setValue(action.result.result.bhr);
								form.findField('directManager').setValue(action.result.result.directManager);
								form.findField('status').setValue(action.result.result.status);
								form.findField('indirectManager').setValue(action.result.result.indirectManager);
								form.findField('year').setValue("2015");
								form.findField('quarter').setValue("Q2");
								
							},
							failure : function(form, action) {
								Ext.Msg.alert('Failed', action.result.msg);
							}

						});

			},
			onLogin : function(button) {
				// var store = this.getLoginStore();

				var credentials = this.getLoginForm().getForm().getValues();
				var form = button.up('login').getForm();
				if (form.isValid()) {
					form.submit({
								params : {
									credentials : Ext.encode(credentials)
								},
								success : function(form, action) {
									// response --> response.responseText
									Ext.Msg.alert('Success',
											action.result.status);
											panel = button.up('root');
				panel.getLayout().setActiveItem(2);
											

								},
								failure : function(form, action) {
									Ext.Msg.alert('Failed',
											action.result.status);
								}
							});
				}

				/*
				 * store.load({ params : { credentials : Ext.encode(credentials) },
				 * success: function (form, action) { //response -->
				 * response.responseText Ext.Msg.alert('Success',
				 * action.result.status); },
				 * 
				 * failure: function (form, action) { Ext.Msg.alert('Failed',
				 * action.result.status); } });
				 */

			},
			onResetClickLogin : function() {
				this.getLoginForm().getForm().reset();
			},

			onRegister : function(button) {
				panel = button.up('root');
				panel.getLayout().setActiveItem(1);
			},
			onSave : function(button) {

				var values = this.getRegisterForm().getForm().getValues();
				var form = button.up('register').getForm();
				// if (form.isValid()) {
				form.submit({
							params : {
								empData : Ext.encode(values)
							},
							success : function(form, action) {
								// response --> response.responseText
								Ext.Msg.alert('Success', action.result.msg);

							},
							failure : function(form, action) {
								Ext.Msg.alert('Failed', action.result.msg);
							}
						});
						
						panel = button.up('root');
				panel.getLayout().setActiveItem(0);

				// this.getRegisterForm().getForm().reset();

			}
			/*onGetData : function(button) {
				var name = this.getEmployeeDataForm().getForm()
						.findField('name').getSubmitValue()
				var form = button.up('employeeData').getForm();
				form.submit({
							params : {
								name : Ext.encode(name)
							},
							success : function(form, action) {
								// response --> response.responseText
								Ext.Msg.alert('Success', action.result.msg);
								Ext.Msg.alert('Success', action.result.result);
								form.setValues(Ext.JSON
										.decode(action.result.result));

							},
							failure : function(form, action) {
								Ext.Msg.alert('Failed', action.result.msg);
							}
						});
			}*/

		});