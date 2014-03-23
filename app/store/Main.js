Ext.define('SenchaTough.store.Main', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'SenchaTough.model.Main'
    ],

    config: {
        defaultRootProperty: 'items',
        model: 'SenchaTough.model.Main'
        /*root: {
                "items" : [{
                            "text" : "Today",
                            "items" : [{
                                        "text" : "Eat",
                                        "leaf" : true
                                    }]
                            }, 
                            {
                            "text" : "Tomorrow",
                            "items" : [{
                                        "text" : "Watch TV",
                                        "leaf" : true
                                    }]
                            }, 
                            {
                            "text" : "Later",
                            "items" : [{
                                        "text" : "Drink",
                                        "leaf" : true
                                    }]
                            }]
                }*/
    }

});
