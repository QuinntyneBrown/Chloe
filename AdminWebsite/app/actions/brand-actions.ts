class BrandActions {
    constructor(private brandService,
        private dispatcher,
        private guid,
        private BRAND_ACTIONS
        ) { }

    all = () => {
        var newGuid = this.guid();
        this.brandService.get().then((results) => {
            this.dispatcher.emit({
                actionType: this.BRAND_ACTIONS.ALL,
                options: { data: results, id: newGuid }
            });
        });
        return newGuid;
    }

    getProvidersByBrandId = (options) => {
        var newGuid = this.guid();
        this.brandService.getProvidersByBrandId(options).then((results) => {
            this.dispatcher.emit({
                actionType: this.BRAND_ACTIONS.PROVIDERS_BY_BRAND,
                options: { data: { id: options.id, items: results }, id: newGuid }
            });
        });
        return newGuid;
    }

    getPagesByBrandId = (options) => {
        var newGuid = this.guid();
        this.brandService.getPagesByBrandId(options).then((results) => {
            this.dispatcher.emit({
                actionType: this.BRAND_ACTIONS.PAGES_BY_BRAND,
                options: { data: results, id: newGuid }
            });
        });
        return newGuid;
    }

    add = (options) => {
        var newGuid = this.guid();
        this.brandService.add(options).then((results) => {
            this.dispatcher.emit({
                actionType: this.BRAND_ACTIONS.ADDED,
                options: { data: results, id: newGuid }
            });
            
            this.dispatcher.emit({
                actionType: this.BRAND_ACTIONS.PROVIDERS_BY_BRAND,
                options: { data: { id: options.data.id, items: options.data.providers.filter((p) => { return p.checked; }) }, id: newGuid }
            });

            this.dispatcher.emit({
                actionType: this.BRAND_ACTIONS.PAGES_BY_BRAND,
                options: { data: options.data.pages.filter((p) => { return p.checked; }), id: newGuid }
            });
        });
        return newGuid;
    }

    remove = (options) => {
        var newGuid = this.guid();
        this.brandService.remove(options).then((results) => {
            this.dispatcher.emit({
                actionType: this.BRAND_ACTIONS.REMOVED,
                options: { data: options.id, id: newGuid }
            });
        });
        return newGuid;
    }
}

angular.module("app").service("brandActions", ["brandService", "dispatcher", "guid","BRAND_ACTIONS",BrandActions]);