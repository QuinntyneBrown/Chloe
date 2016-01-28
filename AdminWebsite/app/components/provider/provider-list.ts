class ProviderListComponent {
    constructor(private $routeParams, private bundle, private bundleStore, private provider, private providerStore: any) { }

    onInit = () => {
        this.items = [];
        for (var i = 0; i < this.providerStore.items.length; i++) {
            this.items.push(this.provider.createInstance({
                data: this.providerStore.items[i]
            }));
        }

        if (!this.$routeParams.id) {
            this.modelInstance = this.provider.createInstance();
        } else {
            for (var i = 0; i < this.providerStore.items.length; i++) {
                if (Number(this.$routeParams.id) === this.providerStore.items[i].id) {
                    this.modelInstance = this.provider.createInstance({ data: this.providerStore.items[i] });
                }
            }
        }

        for (var i = 0; i < this.bundleStore.items.length; i++) {
            var bundle = this.bundle.createInstance({
                data: this.bundleStore.items[i]
            });
            for (var x = 0; x < this.providerStore.bundlesByProvider.length; x++) {
                if (bundle.id == this.providerStore.bundlesByProvider[x].id) {
                    bundle.checked = true;
                }
            }

            this.modelInstance.bundles.push(bundle);
        }  
    }

    items: any[] = [];
    modelInstance: any;

    storeOnChange = () => { this.onInit(); }

    static canActivate() {
        return ["$q", "$route", "bundleActions", "providerActions", "invokeAsync", ($q, $route, bundleActions, providerActions, invokeAsync) => {
            var promises = [];
            promises.push(invokeAsync(providerActions.all));
            promises.push(invokeAsync(bundleActions.all));            

            if ($route.current.params.id) {
                promises.push(invokeAsync({
                    action: providerActions.getBundlesByProviderId,
                    params: { id: Number($route.current.params.id) }
                }));
            }

            return $q.all(promises);
        }];
    }
}

ngX.Component({
    component: ProviderListComponent,
    routes: ["/provider/list", "/provider/edit/:id"],
    templateUrl: "app/components/provider/provider-list.html",
    providers: ["$routeParams","bundle","bundleStore","provider","providerStore"]
});