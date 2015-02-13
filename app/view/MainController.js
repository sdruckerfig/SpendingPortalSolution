Ext.define('SpendingPortal.view.MainController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.main',
	requires: ['SpendingPortal.view.Feedback'],
	
	onFeedback: function(b,e) {
		Ext.widget('feedback');
	}

});