Ext.define('HRMS.store.Login', {
    extend: 'Ext.data.Store',
    model: 'HRMS.model.Login',
    autoLoad: false,
    
    
     proxy: {
    	  type: 'ajax',
    	url		: 'hrms/authUser',
    	method  : 'POST'
    	

    	//jsonData: values,	
 //successProperty: 'success'
    	
    }

});