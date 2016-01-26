class BrandStore {
    constructor(dispatcher, BRAND_ACTIONS) {

        dispatcher.addListener({
            actionType: BRAND_ACTIONS.ALL,
            callback: function (options) {
                this.items = options.data;
                this.storeInstance.emitChange({ id: options.id });
            }
        });

        dispatcher.addListener({
            actionType: BRAND_ACTIONS.ALL,
            callback: function (options) {
                this.items = options.data;
                this.storeInstance.emitChange({ id: options.id });
            }
        });
    }

    items: any[];

    storeInstance: any;
    
}

ngX.store({ store: BrandStore, providers: ["dispatcher","BRAND_ACTIONS"] });