class BundleListComponent {
    constructor(private $routeParams, private bundle, private bundleStore: any) { }    
    items: any[];
    modelInstance: any;
    storeOnChange = () => { this.onInit(); }
    onInit = () => {        
        this.modelInstance = this.bundle.createInstance();        
        this.items = [];
        this.bundleStore.items.forEach((item) => {
            this.items.push(this.bundle.createInstance({ data: item }));
        }); 
    }
    static canActivate() {
        return ["bundleActions", "invokeAsync", (bundleActions, invokeAsync) => {
            return invokeAsync(bundleActions.all);
        }];
    }
}

ngX.Component({
    component: BundleListComponent,
    routes: ["/bundle/list"],
    templateUrl: "app/components/bundle/bundle-list.html",
    providers: ["$routeParams","bundle","bundleStore"]
});