class BrandListComponent {
    constructor(private $routeParams, private brand, private brandStore, private page, private pageStore, private pluck, private provider, private providerStore) { }
    
    onInit = () => {        
        this.modelInstance = this.brand.createInstance();            
        this.items = [];
        this.brandStore.items.forEach((item) => { this.items.push(this.brand.createInstance({ data: item })); });        
    }

    items: any[] = [];
    providers: any[] = [];
    modelInstance: any;
    
    storeOnChange = () => { this.onInit(); }
    
    static canActivate() {
        return ["$q", "$route", "BRAND_ACTIONS", "brandActions", "dispatcher", "invokeAsync", "pageActions", "providerActions", ($q, $route, BRAND_ACTIONS, brandActions, dispatcher, invokeAsync, pageActions, providerActions) => {               
            var promises = [];
            promises.push(invokeAsync(brandActions.all));
            promises.push(invokeAsync(providerActions.all));
            promises.push(invokeAsync(pageActions.all));
            return $q.all(promises);            
        }];
    }
}

ngX.Component({
    component: BrandListComponent,
    routes: ["/brand/list"],
    templateUrl: "app/components/brand/brand-list.html",
    providers: ["$routeParams", "brand", "brandStore", "page", "pageStore", "pluck", "provider","providerStore"]
});