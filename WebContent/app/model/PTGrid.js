Ext.define('HRMS.model.PTGrid', {
    extend: 'Ext.data.Model',
    fields : ['userId', 'userName', 'status', 'edc', 'bhr', 'level','designation', 
    'resignDate', 'doj', 'directManager', 'indirectManager', 'quarter', 'year']
});