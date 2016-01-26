class BundleStore {
    constructor(dispatcher, BUNDLE_ACTIONS) {

        dispatcher.addListener({
            actionType: BUNDLE_ACTIONS.ALL,
            callback: function (options) {
                this.storeInstanceitems = options.data;
                this.storeInstance.emitChange({ id: options.id });
            }
        });

        dispatcher.addListener({
            actionType: BUNDLE_ACTIONS.ADDED,
            callback: function (options) {
                this.storeInstance.addOrUpdate({ data: options.data });
                this.storeInstance.emitChange({ id: options.id });
            }
        });

        dispatcher.addListener({
            actionType: BUNDLE_ACTIONS.REMOVED,
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

ngX.Store({ store: BundleStore, providers: ["dispatcher", "BUNDLE_ACTIONS"] });
