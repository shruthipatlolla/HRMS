Ext.define('HRMS.view.user.PredictabilityForm', {
			extend : 'Ext.form.Panel',
			alias : 'widget.pForm',
			itemId : 'pForm',

			layout: 'anchor',
items: [{
    xtype : 'pt'
   // height: '50%'
   // anchor: '50%'
},{
    xtype : 'employeeData'
   // height: '50%'
    //anchor: '-100'
}]

			
			/*layout : 'hbox',
			items : [{
						xtype : 'pt'
						
					},
					{
						xtype : 'employeeData'
						
					}]*/
		});
