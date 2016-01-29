class ProviderStore {
    constructor(private dispatcher, private pluck, private PROVIDER_ACTIONS) { }

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
                var providersByBrand = this.pluck({ items: this.bundlesByProvider, value: options.data.id });
                if (providersByBrand) {
                    providersByBrand.items = options.data.items;
                } else {
                    this.bundlesByProvider.push(options.data)
                }

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

ngX.Store({ store: ProviderStore, providers: ["dispatcher", "pluck", "PROVIDER_ACTIONS"] });
