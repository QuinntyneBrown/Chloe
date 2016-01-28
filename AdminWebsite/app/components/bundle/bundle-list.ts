class BundleListComponent {
    constructor(private $routeParams, private bundle, private bundleStore: any) { }
    
    items: any[];
    modelInstance: any;

    storeOnChange = () => { this.onInit(); }

    onInit = () => {
        if (!this.$routeParams.id) {
            this.modelInstance = this.bundle.createInstance();
        } else {
            for (var i = 0; i < this.bundleStore.items.length; i++) {
                if (Number(this.$routeParams.id) === this.bundleStore.items[i].id) {
                    this.modelInstance = this.bundle.createInstance({ data: this.bundleStore.items[i] });
                }
            }
        }

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
    routes: ["/bundle/list", "/bundle/edit/:id"],
    templateUrl: "app/components/bundle/bundle-list.html",
    providers: ["$routeParams","bundle","bundleStore"]
});