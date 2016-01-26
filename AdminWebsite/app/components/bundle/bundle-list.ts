class BundleListComponent {
    constructor(bundleStore: any) { this.items = bundleStore.items; }

    items: any[];

    static canActivate() {
        return ["bundleActions", "invokeAsync", (bundleActions, invokeAsync) => {
            return invokeAsync(bundleActions.all);
        }];
    }
}

ngX.Component({
    component: BundleListComponent,
    route: "/bundle/list",
    templateUrl: "app/components/bundle/bundle-list.html",
    providers: ["bundleStore"]
});