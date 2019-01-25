Ext.define('HRMS.view.user.QuestionCombo', {
    extend: 'Ext.form.ComboBox',
    alias: 'widget.questionCombo',
   // queryMode: 'local',
    displayField: 'text',
    valueField: 'value',  
    forceSelection: true,
    id: 'comboBox',
    //labelWidth: 100,
    labelAlign : 'top',
    fieldLabel: 'Select a Question',
   // size: 50,
    //maxLength: 50,
    triggerAction : 'all',
    allowBlank : false,
    name: 'comboBox',
    editable : false,
    store : new Ext.data.SimpleStore({
								data : [[1, 'What was the name of your first school'], [2, 'first pets name']],

								id : 0,
								fields : ['value', 'text']
							})
});
