class Brand {

    constructor(private $injector, private $location, private $q, private brandActions, private brandStore, private invokeAsync, private pluck, private providerStore) { }

    createInstance = (options) => {
        var instance = new Brand(this.$injector, this.$location, this.$q, this.brandActions, this.brandStore, this.invokeAsync, this.pluck, this.providerStore);
        if (options && options.data) {
            instance.id = options.data.id;
            instance.name = options.data.name;
        }
        return instance;
    }
    
    id: number;     
    name: string;
    providers: any[] = [];
    pages: any[] = [];

    save = () => {
        return this.brandActions.add({
            data: {
                id: this.id,
                name: this.name,
                pages: this.pages,
                providers: this.providers
            }
        });
    }

    editModelHtml = "<edit-brand brand='model' providers='model.providers'></edit-brand>";

    cancel = () => { this.brandActions.cancel(); }

    create = () => { this.brandActions.create({ model: this }); }

    remove = () => { return this.brandActions.remove({ id: this.id }); }

    edit = () => {
        if (!this.providers || this.providers.length < 1) {
            this.invokeAsync({
                action: this.brandActions.getProvidersByBrandId,
                params: { id: this.id }
            }).then(() => {
                this.providers = [];
                this.providerStore.items.forEach((item) => {
                    item.checked = this.pluck({ items: this.providersByBrand, value: item.id }) != null;
                    this.providers.push(item);
                });

                this.brandActions.edit({ model: this });
            });
        } else {
            this.brandActions.edit({ model: this });
        }            
    }

    get providersByBrand() { return this.pluck({ items: this.brandStore.providersByBrand, value: this.id }).items; }


}

angular.module("app").service("brand",
    ["$injector", "$location", "$q", "brandActions", "brandStore","invokeAsync", "pluck","providerStore",Brand]);
