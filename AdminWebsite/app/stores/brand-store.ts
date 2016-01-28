class BrandStore {
    constructor(private dispatcher, private BRAND_ACTIONS, private pluck) { }

    public registerListeners = () => {

        this.dispatcher.addListener({
            actionType: this.BRAND_ACTIONS.ALL,
            callback: (options) => {
                this.storeInstance.items = options.data;
                this.storeInstance.emitChange({ id: options.id });
            }
        });

        this.dispatcher.addListener({
            actionType: this.BRAND_ACTIONS.PROVIDERS_BY_BRAND,
            callback: (options) => {                
                var providersByBrand = this.pluck({ items: this.providersByBrand, value: options.data.id });
                if (providersByBrand) {
                    providersByBrand.items = options.data.items;
                } else {
                    this.providersByBrand.push(options.data)
                }

                this.storeInstance.emitChange({ id: options.id });
            }
        });

        this.dispatcher.addListener({
            actionType: this.BRAND_ACTIONS.PAGES_BY_BRAND,
            callback: (options) => {
                this.pagesByBrand = options.data;
                this.storeInstance.emitChange({ id: options.id });
            }
        });

        this.dispatcher.addListener({
            actionType: this.BRAND_ACTIONS.ADDED,
            callback: (options) => {
                this.storeInstance.addOrUpdate({ data: options.data });
                this.storeInstance.emitChange({ id: options.id });
            }
        });

        this.dispatcher.addListener({
            actionType: this.BRAND_ACTIONS.REMOVED,
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

    items: any[];
    providersByBrand: any[] = [];
    pagesByBrand: any[] = [];
    storeInstance: any;
    
}

ngX.Store({ store: BrandStore, providers: ["dispatcher","BRAND_ACTIONS","pluck"] });