class ProviderListComponent {
    constructor(private $routeParams, private bundle, private bundleStore, private provider, private providerStore: any) { }

    onInit = () => {
        this.items = [];
        this.providerStore.items.forEach((item) => {
            this.items.push(this.provider.createInstance({
                data: item
            }));
        });
        this.modelInstance = this.provider.createInstance(); 
    }

    items: any[] = [];
    modelInstance: any;

    storeOnChange = () => { this.onInit(); }

    static canActivate() {
        return ["$q", "$route", "PROVIDER_ACTIONS", "bundleActions", "dispatcher", "providerActions", "invokeAsync", ($q, $route, PROVIDER_ACTIONS, bundleActions, dispatcher, providerActions, invokeAsync) => {
            var promises = [];
            promises.push(invokeAsync(providerActions.all));
            promises.push(invokeAsync(bundleActions.all));            
            return $q.all(promises);
        }];
    }
}

ngX.Component({
    component: ProviderListComponent,
    routes: ["/provider/list"],
    templateUrl: "app/components/provider/provider-list.html",
    providers: ["$routeParams","bundle","bundleStore","provider","providerStore"]
});