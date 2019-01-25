Ext.define('HRMS.store.PTGrid', {
    extend: 'Ext.data.Store',
    model: 'HRMS.model.PTGrid',
    autoLoad: true,
   
    
 proxy: {
        type: 'ajax',
        
         url: 'hrms/empTable',
        
       
        reader: {
            type: 'json',
            root: 'array',
            successProperty: 'success'
        }
    }
    
    
});