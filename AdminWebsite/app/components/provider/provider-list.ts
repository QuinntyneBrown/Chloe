class ProviderListComponent {
    constructor(providerStore: any) { this.items = providerStore.items; }

    items: any[];

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
    providers: ["providerStore"]
});