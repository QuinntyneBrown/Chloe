class BrandStore {
    constructor(dispatcher, BRAND_ACTIONS) {

        dispatcher.addListener({
            actionType: BRAND_ACTIONS.ALL,
            callback: function (options) {
                this.storeInstanceitems = options.data;
                this.storeInstance.emitChange({ id: options.id });
            }
        });

        dispatcher.addListener({
            actionType: BRAND_ACTIONS.ADDED,
            callback: function (options) {
                this.storeInstance.addOrUpdate({ data: options.data });
                this.storeInstance.emitChange({ id: options.id });
            }
        });

        dispatcher.addListener({
            actionType: BRAND_ACTIONS.REMOVED,
            callback: function (options) {
                var items = this.storeInstance.items;
                for (var i = 0; i < items.length; i++) {
                    if (options.data === items[i].id) {
                        items.splice(i, 1);
                    }
                }
                this.storeInstance.items = items;
                this.storeInstance.emitChange({ id: options.id });
            }
        });
    }

    items: any[];

    storeInstance: any;
    
}

ngX.Store({ store: BrandStore, providers: ["dispatcher","BRAND_ACTIONS"] });