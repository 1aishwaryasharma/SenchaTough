Ext.define('SenchaTough.view.AccordionListPage', {
    extend: 'Ext.Container',
    xtype: 'accordionlistpage',
    requires: [
        'Ext.ux.AccordionList',
    ],
    config: {

        items: [

        {
                        xtype: 'accordionlist',
                        store: 'Main',
                        headerItemTpl: [
                            '<div>{text}</div>'
                        ].join(''),
                        contentItemTpl: [
                            '<div>{text}</div>'
                        ].join(''),
                        animation: true,
                        indent: true,
                        animationDuration: 300,
                        width:'100%',
                        height: '600px',
                        itemId: 'nested',
                        listeners: {
                            initialize: function() {
                                this.load();
                            }
                        }
                    }
            
        ]
    }
});
