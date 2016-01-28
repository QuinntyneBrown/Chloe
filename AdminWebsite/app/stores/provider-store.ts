class ProviderStore {
    constructor(private dispatcher, private PROVIDER_ACTIONS) { }

    items: any[];
    bundlesByProvider: any = [];
    storeInstance: any;

    public registerListeners = () => {
        this.dispatcher.addListener({
            actionType: this.PROVIDER_ACTIONS.ALL,
            callback: (options) => {
                this.storeInstance.items = options.data;
                this.storeInstance.emitChange({ id: options.id });
            }
        });
        
        this.dispatcher.addListener({
            actionType: this.PROVIDER_ACTIONS.BUNDLES_BY_PROVIDER,
            callback: (options) => {
                this.bundlesByProvider = options.data;
                this.storeInstance.emitChange({ id: options.id });
            }
        });

        this.dispatcher.addListener({
            actionType: this.PROVIDER_ACTIONS.ADDED,
            callback: (options) => {
                this.storeInstance.addOrUpdate({ data: options.data });
                this.storeInstance.emitChange({ id: options.id });
            }
        });

        this.dispatcher.addListener({
            actionType: this.PROVIDER_ACTIONS.REMOVED,
            callback: (options) => {
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

}

ngX.Store({ store: ProviderStore, providers: ["dispatcher", "PROVIDER_ACTIONS"] });
