Ext.define('HRMS.view.user.SecQuestion', {
			extend : 'Ext.form.Panel',
			alias : 'widget.secQuestion',
renderTo: Ext.getBody(), 
title : 'Security Questions',
					
					
					items : [
					{
					xtype : 'questionCombo',
					fieldLabel : 'Question 1',
					name:'Q1',
					editable : false
				},
				{
					xtype : 'questionCombo',
					fieldLabel : 'Question 2',
					name:'Q1',
					editable : false
				}
							],
							buttons : [{
				text : 'Done',
				itemId : 'btnDone'

			}, {
				text : 'Reset',
				itemId : 'btnReset'
			}]
});