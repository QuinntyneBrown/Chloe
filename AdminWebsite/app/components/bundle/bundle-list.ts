class BundleListComponent {
    constructor(private bundle, private bundleStore: any) {
        this.modelInstance = this.bundle.createInstance();
        this.items = [];
        for (var i = 0; i < this.bundleStore.items.length; i++) {
            this.items.push(this.bundle.createInstance({
                data: this.bundleStore.items[i]
            }));
        }        
    }
    
    items: any[];
    modelInstance: any;

    storeOnChange = () => {
        this.modelInstance = this.bundle.createInstance();
        this.items = [];
        for (var i = 0; i < this.bundleStore.items.length; i++) {
            this.items.push(this.bundle.createInstance({
                data: this.bundleStore.items[i]
            }));
        }
    }
    
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
    providers: ["bundle","bundleStore"]
});