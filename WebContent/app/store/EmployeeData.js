Ext.define('HRMS.store.EmployeeData', {
    extend: 'Ext.data.Store',
  //  model: 'HRMS.model.Login',
    autoLoad: false,
    
    
     proxy: {
    	  type: 'ajax',
    	url		: 'hrms/empData',
    	method  : 'POST'
    	

    	//jsonData: values,	
 //successProperty: 'success'
    	
    },
    reader: {
            type: 'json',
            root: 'myResponse',
            successProperty: 'success'
        }

});