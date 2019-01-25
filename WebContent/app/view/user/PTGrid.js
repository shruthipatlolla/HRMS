Ext.define('HRMS.view.user.PTGrid', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.ptGrid',
			rowLines : true,
			columnLines : true,
			layout : 'fit',
			itemId : 'ptGrid',
			frame : true,
			renderTo : Ext.getBody(),
			scroll : true,

			store : 'PTGrid',
			requires: ['HRMS.view.user.SearchTrigger'],
			initComponent : function() {
				var userEdit = this;

				Ext.apply(this, {
							columns : [{
										header : 'SAP ID',

										dataIndex : 'userId'

									}, {
										header : 'Name',

										dataIndex : 'userName'
										/*items : [{
													xtype : 'searchtrigger',
													autoSearch : true
												}]*/

									}, {
										header : 'Status',
										dataIndex : 'status'

									}, {
										header : 'EDC',
										dataIndex : 'edc'

									}, {
										header : 'BHR',
										dataIndex : 'bhr'

									}, {
										header : 'Level',
										dataIndex : 'level'

									}, {
										header : 'Designation',
										dataIndex : 'designation'

									}, {
										header : 'Resign Date',
										dataIndex : 'resignDate'

									}, {
										header : 'Date Of Joining',
										dataIndex : 'doj'

									}, {
										header : 'Manager',
										dataIndex : 'directManager'

									}, {
										header : 'Indirect Manager',
										dataIndex : 'indirectManager'

									}, {
										header : 'Quarter',
										dataIndex : 'quarter'

									}, {
										header : 'Year',
										dataIndex : 'year'

									}]

						});

				this.callParent(arguments);

			}
		});
