class BrandStore {
    constructor(private dispatcher, private BRAND_ACTIONS) { }

    public registerListeners = () => {
        var storeInstance = this.storeInstance;
        this.dispatcher.addListener({
            actionType: this.BRAND_ACTIONS.ALL,
            callback: function (options) {
                storeInstance.items = options.data;
                storeInstance.emitChange({ id: options.id });
            }
        });

        this.dispatcher.addListener({
            actionType: this.BRAND_ACTIONS.ADDED,
            callback: function (options) {
                this.storeInstance.addOrUpdate({ data: options.data });
                this.storeInstance.emitChange({ id: options.id });
            }
        });

        this.dispatcher.addListener({
            actionType: this.BRAND_ACTIONS.REMOVED,
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