class ProviderListComponent {
    constructor(private provider, private providerStore: any) {
        this.modelInstance = this.provider.createInstance();
        this.items = [];
        for (var i = 0; i < this.providerStore.items.length; i++) {
            this.items.push(this.provider.createInstance({
                data: this.providerStore.items[i]
            }));
        }
    }

    items: any[];

    modelInstance: any;

    storeOnChange = () => {
        this.modelInstance = this.provider.createInstance();
        this.items = [];
        for (var i = 0; i < this.providerStore.items.length; i++) {
            this.items.push(this.provider.createInstance({
                data: this.providerStore.items[i]
            }));
        }
    }

    static canActivate() {
        return ["providerActions", "invokeAsync", (providerActions, invokeAsync) => {
            return invokeAsync(providerActions.all);
        }];
    }
}

ngX.Component({
    component: ProviderListComponent,
    route: "/provider/list",
    templateUrl: "app/components/provider/provider-list.html",
    providers: ["provider","providerStore"]
});