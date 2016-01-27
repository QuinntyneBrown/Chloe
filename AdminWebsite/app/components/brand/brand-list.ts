class BrandListComponent {
    constructor(private $scope, private brand, private brandStore) {
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
        return ["brandActions", "invokeAsync", (brandActions, invokeAsync) => {            
            return invokeAsync(brandActions.all);            
        }];
    }
}

ngX.Component({
    component: BrandListComponent,
    route:"/brand/list",
    templateUrl: "app/components/brand/brand-list.html",
    providers: ["$scope","brand", "brandStore"]
});