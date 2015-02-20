Ext.define('SpendingPortal.view.Feedback', {
    extend: 'Ext.window.Window',
    alias: 'widget.feedback',

    autoShow: true,
    height: 400,
    width: 436,
    modal: true,
    layout: {
        type: 'fit'
    },
    title: 'Feedback',
    bodyPadding: 5,
    items: [{
        xtype: 'form',
        header: false,
        items: [{
            xtype: 'fieldcontainer',
            height: 27,
            layout: {
                align: 'stretch',
                type: 'hbox'
            },
            fieldLabel: 'Name',
            items: [{
                xtype: 'textfield',
                flex: 1,
                fieldLabel: '',
                hideLabel: true,
                name: 'firstname',
                allowBlank: false,
                emptyText: 'First Name'
            }, {
                xtype: 'textfield',
                flex: 1,
                fieldLabel: 'Label',
                hideEmptyLabel: false,
                hideLabel: true,
                name: 'lastname',
                allowBlank: false,
                emptyText: 'Last Name'
            }]
        }, {
            xtype: 'datefield',
            anchor: '100%',
            fieldLabel: 'Date',
            name: 'date',
            value: new Date()
        }, {
            xtype: 'textfield',
            anchor: '100%',
            fieldLabel: 'Email',
            name: 'email',
            allowBlank: false,
            vtype: 'email'
        }, {
            xtype: 'combobox',
            anchor: '100%',
            fieldLabel: 'Chapter',
            name: 'chapter',
            displayField: 'label',
            queryMode: 'local',
            store: 'BookChapters',
            valueField: 'id'
        }, {
            xtype: 'sliderfield',
            anchor: '100%',
            fieldLabel: 'Rating<br />1=poor,10=great',
            name: 'rating',
            value: 5,
            maxValue: 10,
            minValue: 1
        }, {
            xtype: 'textareafield',
            anchor: '100% -185',
            height: 150,
            style: 'background-color: white;',
            fieldLabel: 'Feedback',
            labelAlign: 'top',
            name: 'feedback'
        }],
        buttons: [{
            text: 'Submit',
            handler: function(button, event) {
                var form = button.up('form');

                form.submit({
                    url: 'http://webapps.figleaf.com/arch101/dataservices/desktop/feedback.cfc?method=submitfeedback',
                    success: function() {
                        Ext.Msg.alert("Feedback Received", "Thank you for your feedback!");
                    },
                    failure: function() {
                        Ext.Msg.alert("Feedback failed", "An error occurred while processing the request.");
                    },
                    scope: this
                });
            }
        }]
    }]
});