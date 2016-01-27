class BrandProviderActions {
    constructor(private brandService,
        private dispatcher,
        private guid,
        private BRAND_PROVIDER_ACTIONS
    ) { }

    all = () => {
        var newGuid = this.guid();
        this.brandService.get().then((results) => {
            this.dispatcher.emit({
                actionType: this.BRAND_PROVIDER_ACTIONS.ALL,
                options: { data: results, id: newGuid }
            });
        });
        return newGuid;
    }

    add = (options) => {
        var newGuid = this.guid();
        this.brandService.add(options).then((results) => {
            this.dispatcher.emit({
                actionType: this.BRAND_PROVIDER_ACTIONS.ADDED,
                options: { data: results, id: newGuid }
            });
        });
        return newGuid;
    }

    remove = (options) => {
        var newGuid = this.guid();
        this.brandService.remove(options).then((results) => {
            this.dispatcher.emit({
                actionType: this.BRAND_PROVIDER_ACTIONS.REMOVED,
                options: { data: options.id, id: newGuid }
            });
        });
        return newGuid;
    }
}

angular.module("app").service("brandProviderActions", ["brandService", "dispatcher", "guid", "BRAND_PROVIDER_ACTIONS", BrandProviderActions]);