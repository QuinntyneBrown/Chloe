class Provider {
    constructor(private $injector, private $location, private $q, private bundleStore, private pluck, private providerActions, private providerStore, private invokeAsync) { }

    createInstance = (options) => {
        var instance = new Provider(this.$injector, this.$location, this.$q, this.bundleStore, this.pluck, this.providerActions, this.providerStore, this.invokeAsync);
        if (options && options.data) {
            instance.id = options.data.id;
            instance.name = options.data.name;
        }
        return instance;
    }

    id: number;
    name: string;
    bundles: any[] = [];

    save = () => {
        return this.providerActions.add({
            data: {
                id: this.id,
                name: this.name,
                bundles: this.bundles
            }
        });
    }

    editModelHtml = "<edit-provider provider='model' bundles='model.bundles'></edit-provider>";

    cancel = () => { this.providerActions.cancel(); }

    create = () => { this.providerActions.create({ model: this }); }

    remove = () => { return this.providerActions.remove({ id: this.id }); }

    edit = () => {
        if (!this.bundles || this.bundles.length < 1) {
            this.invokeAsync({
                action: this.providerActions.getBundlesByProviderId,
                params: { id: this.id }
            }).then(() => {
                this.bundles = [];
                this.bundleStore.items.forEach((item) => {
                    item.checked = this.pluck({ items: this.bundlesByProvider, value: item.id }) != null;
                    this.bundles.push(item);
                });

                this.providerActions.edit({ model: this });
            });
        } else {
            this.providerActions.edit({ model: this });
        }
    }

    get bundlesByProvider() { return this.pluck({ items: this.providerStore.bundlesByProvider, value: this.id }).items; }
}

angular.module("app").service("provider",
    ["$injector", "$location", "$q", "bundleStore", "pluck","providerActions", "providerStore", "invokeAsync", Provider]);
