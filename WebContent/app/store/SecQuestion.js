Ext.define('HRMS.store.SecQuestion', {
    extend: 'Ext.data.Store',
   // model: 'POC.model.EmpList',
    autoLoad: true,
   data : [[1, 'What was the name of your first school'], [2, 'first pets name']],

								id : 0,
								fields : ['value', 'text']


});