class BrandListComponent {
    constructor(private $routeParams, private brand, private brandStore, private page, private pageStore, private pluck, private provider, private providerStore) { }
    
    onInit = () => {        
        if (!this.$routeParams.id) {
            this.modelInstance = this.brand.createInstance();
        } else {
            this.modelInstance = this.brand.createInstance({
                data: this.pluck({ items: this.brandStore.items, value: Number(this.$routeParams.id) })
            });           
        }
            
        this.items = [];
        this.modelInstance.providers = [];
        this.modelInstance.pages = [];

        this.brandStore.items.forEach((item) => {
            this.items.push(this.brand.createInstance({ data: item }));
        });
        
        this.providerStore.items.forEach((p) => {
            var provider = this.provider.createInstance({ data: p });
            if (this.pluck({ items: this.providersByBrand, value: provider.id }))
                provider.checked = true;
            this.modelInstance.providers.push(provider);
        });  
        
        this.pageStore.items.forEach((p) => {
            var page = this.page.createInstance({ data: p });
            if (this.pluck({ items: this.brandStore.pagesByBrand, value: page.id }))
                page.checked = true;
            this.modelInstance.pages.push(page);
        });
    }

    get providersByBrand() {
        return this.$routeParams.id ? this.pluck({ items: this.brandStore.providersByBrand, value: this.$routeParams.id }).items : [];
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

            if ($route.current.params.id) {
                promises.push(invokeAsync({
                    action: brandActions.getProvidersByBrandId,
                    params: { id: Number($route.current.params.id) }
                }));
                promises.push(invokeAsync({
                    action: brandActions.getPagesByBrandId,
                    params: { id: Number($route.current.params.id) }
                }));
            } else {
                dispatcher.emit({
                    actionType: BRAND_ACTIONS.PAGES_BY_BRAND,
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
    providers: ["$routeParams", "brand", "brandStore", "page", "pageStore", "pluck", "provider","providerStore"]
});