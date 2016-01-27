class ProviderActions {
    constructor(private providerService,
        private dispatcher,
        private guid,
        private PROVIDER_ACTIONS
    ) { }

    all = () => {
        var newGuid = this.guid();
        this.providerService.get().then((results) => {
            this.dispatcher.emit({
                actionType: this.PROVIDER_ACTIONS.ALL,
                options: { data: results, id: newGuid }
            });
        });
        return newGuid;
    }

    add = (options) => {
        var newGuid = this.guid();
        this.providerService.add(options).then((results) => {
            this.dispatcher.emit({
                actionType: this.PROVIDER_ACTIONS.ADDED,
                options: { data: results, id: newGuid }
            });
        });
        return newGuid;
    }

    remove = (options) => {
        var newGuid = this.guid();
        this.providerService.remove(options).then((results) => {
            this.dispatcher.emit({
                actionType: this.PROVIDER_ACTIONS.REMOVED,
                options: { data: options.id, id: newGuid }
            });
        });
        return newGuid;
    }
}

angular.module("app").service("providerActions", ["providerService", "dispatcher", "guid", "PROVIDER_ACTIONS", ProviderActions]);