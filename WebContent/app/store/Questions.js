Ext.define('HRMS.store.Questions', {
    extend: 'Ext.data.Store',
    model: 'HRMS.model.Questions',
    autoLoad: true,
    
    
     proxy: {
        type: 'ajax',
        api: {
            read: 'data/questions.json'
           
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
    
   /* proxy: {
    	  type: 'ajax',
    	url		: 'hrms/secQuetions',
    	
    	

 reader: {
            type: 'json',
            root: 'array',
            successProperty: 'success'
        },
    	
 successProperty: 'success'
    	
    }*/



});