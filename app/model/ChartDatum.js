

Ext.define('SpendingPortal.model.ChartDatum', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'label'
        },
        {
            name: 'value',
            type: 'int'
        }
    ],

    proxy: {
        type: 'jsonp',
        url: 'http://www.senchatraining.com/ftextjs4/webservices/earmark.cfc?method=getSponsorStats'
    }
});