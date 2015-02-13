Ext.define('SpendingPortal.view.Main', {
    extend: 'Ext.dashboard.Dashboard',
    alias: 'widget.main',
    requires: [
        'SpendingPortal.view.MainViewModel',
        'Ext.toolbar.TextItem',
        'SpendingPortal.view.Earmarks',
        'SpendingPortal.view.Sponsors',
        'SpendingPortal.view.SponsorChart',
        'SpendingPortal.view.MainController'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    columnWidths: [0.5, 0.5],
    ui: 'dashboard',
    parts: {
        asponsors: {
            viewTemplate: {
                title: 'Congressional Representatives',
                items: [{
                    xtype: 'sponsors',
                    header: false
                }]
            }
        },
         
        aearmarksviewer: {
            viewTemplate: {
                title: 'Earmarks',
                items: [{
                    xtype: 'earmarksviewer',
                    header: false
                }]

            }
        },

        asponsorchart: {
            viewTemplate: {
                title: 'Expenditures',
                items: [{
                    xtype: 'sponsorchart',
                    header: false,
                }]

            }
        }
    },

    defaultContent: [ {
        type: 'asponsors',
        columnIndex: 0,
        height: 608
    },   {
        type: 'aearmarksviewer',
        columnIndex: 1,
        height: 300
    },   {
        type: 'asponsorchart',
        columnIndex: 1,
        height: 300
    } ],

    dockedItems: [{
        xtype: 'toolbar',
        ui: 'maintoolbar',
        docked: 'top',
        items: [{
            xtype: 'tbtext',
            text: 'Congressional Earmark Browser',
            cls: 'tradewinds'

        }, {
            xtype: 'tbfill'
        }, {
            xtype: 'button',
            text: 'Feedback',
            handler: 'onFeedback'
        }]
    }]


});