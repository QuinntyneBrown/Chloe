class ProviderActions {
    constructor(private providerService,
        private dispatcher,
        private guid,
        private modal,
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

        //var bundles = [];

        //for (var i = 0; i < options.data.bundles.length; i++) {
        //    if (options.data.bundles[i].checked) {
        //        bundles.push(options.data.bundles[i]);
        //    }
        //}
        //this.dispatcher.emit({
        //    actionType: this.PROVIDER_ACTIONS.BUNDLES_BY_PROVIDER,
        //    options: { data: bundles, id: newGuid }
        //});
        this.modal.closeAsync();
        return newGuid;
    }
    
    getBundlesByProviderId = (options) => {
        var newGuid = this.guid();
        this.providerService.getBundlesByProviderId(options).then((results) => {
            this.dispatcher.emit({
                actionType: this.PROVIDER_ACTIONS.BUNDLES_BY_PROVIDER,
                options: { data: { id: options.id, items: results }, id: newGuid }                
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

    create = (options) => this.modal.openAsync({ html: options.model.editModelHtml, model: options.model });

    edit = (options) => this.modal.openAsync({ html: options.model.editModelHtml, model: options.model });

    cancel = () => this.modal.closeAsync();
}

angular.module("app").service("providerActions", ["providerService", "dispatcher", "guid", "modal", "PROVIDER_ACTIONS", ProviderActions]);