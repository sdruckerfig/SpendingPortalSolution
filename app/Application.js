Ext.define('SpendingPortal.Application', {
    extend: 'Ext.app.Application',
     
    name: 'SpendingPortal',
    controllers: ['Main'],
 
    launch: function () {
       
        Ext.state.Manager.setProvider(
        	Ext.create('Ext.state.LocalStorageProvider')
        );
   
    }
});