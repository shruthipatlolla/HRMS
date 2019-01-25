Ext.define('HRMS.store.EmpList', {
    extend: 'Ext.data.Store',
    model: 'HRMS.model.EmpList',
    autoLoad: true,
    
    
     proxy: {
    	  type: 'ajax',
    	url		: 'hrms/employeeList',
    	
    	

 reader: {
            type: 'json',
            root: 'array',
            successProperty: 'success'
        },
    	
 successProperty: 'success'
    	
    }


});