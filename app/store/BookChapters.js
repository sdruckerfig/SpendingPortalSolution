Ext.define('SpendingPortal.store.BookChapters', {
    extend: 'Ext.data.Store',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'label'
    }],
    data: [{
            id: '1',
            label: 'Chapter 1: Introduction'
        }, {
            id: '2',
            label: 'Chapter 2: Introducing Ext JS 5'
        }, {
            id: '3',
            label: 'Chapter 3: Defining Views'
        }, {
            id: '4',
            label: 'Chapter 4: Reading Complex Data from an App Server'
        }, {
            id: '5',
            label: 'Chapter 5: Visualizing Tabular Data in Grids'
        }, {
            id: '6',
            label: 'Chapter 6: Generating Markup from Data'
        }, {
            id: '7',
            label: 'Chapter 7: Visualizing Hierarchical Data in Trees'
        }, {
            id: '8',
            label: 'Chapter 8: Visualizing Data in Charts'
        }, {
            id: '9',
            label: 'Chapter 9: Maintaining State'
        }, {
            id: '10',
            label: 'Chapter 10: Creating Data Entry Forms'
        }, {
            id: '11',
            label: 'Chapter 11: Theming your App'
        }, {
            id: '12',
            label: 'Chapter 12: Documenting and Testing'
        }, {
            id: '13',
            label: 'Chapter 13: Creating Testing and Production Builds'
        }, {
            id: '14',
            label: 'Chapter 14: Advanced Ext JS 5'
        }

    ]

});