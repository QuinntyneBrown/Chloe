class BrandListComponent {
    constructor(private brand, private brandStore) {
        this.modelInstance = this.brand.createInstance();
        this.items = [];
        for (var i = 0; i < this.brandStore.items.length; i++) {
            this.items.push(this.brand.createInstance({
                data: this.brandStore.items[i]
            }));
        }                
    }
    
    items: any[] = [];

    modelInstance: any;
    
    storeOnChange = () => {
        this.modelInstance = this.brand.createInstance();
        this.items = [];
        for (var i = 0; i < this.brandStore.items.length; i++) {
            this.items.push(this.brand.createInstance({
                data: this.brandStore.items[i]
            }));
        }        
    }
    
    static canActivate() {
        return ["$q", "$route", "brandActions", "invokeAsync", "providerActions", ($q, $route, brandActions, invokeAsync, providerActions) => {               
            var promises = [];
            promises.push(invokeAsync(brandActions.all));
            if ($route.current.params.id) 
                promises.push(invokeAsync({
                    action: providerActions.getAllByBrandId,
                    params: { id: Number($route.current.params.id) }
                }));
            return $q.all(promises);            
        }];
    }
}

ngX.Component({
    component: BrandListComponent,
    routes: ["/brand/list", "/brand/edit/:id"],
    templateUrl: "app/components/brand/brand-list.html",
    providers: ["brand", "brandStore"]
});