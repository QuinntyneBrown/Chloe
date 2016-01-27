class BrandListComponent {
    constructor(private $routeParams, private brand, private brandStore, private provider, private providerStore) {
        //if (!this.$routeParams.id) {
        //    this.brandStore.providersByBrand = [];
        //}
    }
    
    onInit = () => {

        if (!this.$routeParams.id) {
            this.modelInstance = this.brand.createInstance();
            
        } else {
            for (var i = 0; i < this.brandStore.items.length; i++) {
                if (Number(this.$routeParams.id) === this.brandStore.items[i].id) {
                    this.modelInstance = this.brand.createInstance({ data: this.brandStore.items[i] });
                }
            }
        }
            
        this.items = [];
        this.modelInstance.providers = [];
        
        for (var i = 0; i < this.brandStore.items.length; i++) {
            this.items.push(this.brand.createInstance({
                data: this.brandStore.items[i]
            }));
        }

        for (var i = 0; i < this.providerStore.items.length; i++) {
            var provider = this.provider.createInstance({
                data: this.providerStore.items[i]
            });

            for (var x = 0; x < this.brandStore.providersByBrand.length; x++) {
                if (provider.id == this.brandStore.providersByBrand[x].id) {
                    provider.checked = true;
                }
            }

            this.modelInstance.providers.push(provider);
        }  
        
    }

    items: any[] = [];
    providers: any[] = [];

    modelInstance: any;
    
    storeOnChange = () => {
        this.onInit();      
    }
    
    static canActivate() {
        return ["$q", "$route", "BRAND_ACTIONS", "brandActions", "dispatcher", "invokeAsync", "providerActions", ($q, $route, BRAND_ACTIONS, brandActions, dispatcher, invokeAsync, providerActions) => {               
            var promises = [];
            promises.push(invokeAsync(brandActions.all));
            promises.push(invokeAsync(providerActions.all));
            if ($route.current.params.id) {
                promises.push(invokeAsync({
                    action: brandActions.getProvidersByBrandId,
                    params: { id: Number($route.current.params.id) }
                }));
            } else {
                dispatcher.emit({
                    actionType: BRAND_ACTIONS.PROVIDERS_BY_BRAND,
                    options: { data: [], id: null }
                });
            }
            return $q.all(promises);            
        }];
    }
}

ngX.Component({
    component: BrandListComponent,
    routes: ["/brand/list", "/brand/edit/:id"],
    templateUrl: "app/components/brand/brand-list.html",
    providers: ["$routeParams","brand", "brandStore", "provider","providerStore"]
});