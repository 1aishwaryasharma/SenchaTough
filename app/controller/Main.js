Ext.define('SenchaTough.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView : "main",
            mainButton : "main [itemId=mainButton]",
            accordionListPage : "accordionlistpage"
        },
        control: {
            mainButton: {
                tap: 'onMainButtonTap'
            }   
        }
    },

    onMainButtonTap: function(){
        var result = {
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
                                        "text" : "Eat",
                                        "leaf" : true
                                    }]
                            }]
                    };
        var mainStore = Ext.getStore('Main');
        mainStore.setData(result);
        //mainStore.setRoot(result);
        Ext.Viewport.animateActiveItem({
            xtype: 'accordionlistpage'
        }, 'slide');
    }

});
