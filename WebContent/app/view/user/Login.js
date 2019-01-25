Ext.define('HRMS.view.user.Login', {
			extend : 'Ext.form.Panel',
			alias : 'widget.login',
bodyPadding: 5,
    width: 350,

title : 'Login here',
 url: 'hrms/authUser',
					
					bodyPadding : '5',
					buttonAlign : 'center',
					border : false,
					trackResetOnLoad : true,
					layout : {
						type : 'hbox'
					},
					fieldDefaults : {
						xtype : 'textfield',
						msgTarget : 'side',
						labelAlign : 'center',
						labelStyle : 'font-weight:bold'
					},
					items : [
					
							{
								xtype : 'fieldcontainer',
								layout : 'vbox',
								defaultType : 'textfield',
								
								fieldDefaults : {
									labelAlign : 'top',
									labelStyle : 'font-weight:bold'
								},
								items : [ 
								
										{
											fieldLabel : 'User Name',
											//flex : 1,
											name : 'userName',
											id:'uname',
											//afterLabelTextTpl : required,
											//margin : '0 0 0 5',
											allowBlank : false
											
										}, {
											inputType:'password',
											name : 'password',
											//width : 150,
											//margin : '0 0 0 5',
											fieldLabel : 'Password:',
											allowBlank : false
										}]
							}],
							buttons : [{
				text : 'Login',
				itemId : 'btnLogin'

			}, {
				text : 'Reset',
				itemId : 'btnReset'
			},
			{
				text : 'Register',
				itemId : 'btnRegister'
			}]
});