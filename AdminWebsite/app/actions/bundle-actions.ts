class BundleActions {
    constructor(private bundleService,
        private dispatcher,
        private guid,
        private BUNDLE_ACTIONS,
        private modal
    ) { }

    all = () => {
        var newGuid = this.guid();
        this.bundleService.get().then((results) => {
            this.dispatcher.emit({
                actionType: this.BUNDLE_ACTIONS.ALL,
                options: { data: results, id: newGuid }
            });
        });
        return newGuid;
    }

    add = (options) => {
        var newGuid = this.guid();
        this.bundleService.add(options).then((results) => {
            this.dispatcher.emit({
                actionType: this.BUNDLE_ACTIONS.ADDED,
                options: { data: results, id: newGuid }
            });
        });
        this.modal.closeAsync();
        return newGuid;
    }

    remove = (options) => {
        var newGuid = this.guid();
        this.bundleService.remove(options).then((results) => {
            this.dispatcher.emit({
                actionType: this.BUNDLE_ACTIONS.REMOVED,
                options: { data: options.id, id: newGuid }
            });
        });
        return newGuid;
    }

    create = (options) => this.modal.openAsync({ html: options.model.editModelHtml, model: options.model });

    edit = (options) => this.modal.openAsync({ html: options.model.editModelHtml, model: options.model });

    cancel = () => this.modal.closeAsync();
}

angular.module("app").service("bundleActions", ["bundleService", "dispatcher", "guid", "BUNDLE_ACTIONS", "modal", BundleActions]);