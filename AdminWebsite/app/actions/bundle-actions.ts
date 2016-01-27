class BundleActions {
    constructor(private bundleService,
        private dispatcher,
        private guid,
        private BUNDLE_ACTIONS
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
}

angular.module("app").service("bundleActions", ["bundleService", "dispatcher", "guid", "BUNDLE_ACTIONS", BundleActions]);