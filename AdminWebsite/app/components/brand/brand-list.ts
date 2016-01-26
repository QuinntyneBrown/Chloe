class BrandListComponent {
    constructor(private $scope, private brand, private brandStore, private safeDigest) {
        this.brandInstance = this.brand.createInstance();
        this.items = this.brandStore.items;
    }
    
    items: any[] = [];

    brandInstance: any;
    
    storeOnChange = () => {
        //alert(this.items.length === this.brandStore.items.length);
        //this.items.push(this.brandStore.items[this.brandStore.items.length - 1]);
        this.brandInstance = this.brand.createInstance();
        //this.safeDigest(this.$scope);
    }

    getItems = () => {
        return this.items;
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
    providers: ["$scope","brand", "brandStore", "safeDigest"]
});