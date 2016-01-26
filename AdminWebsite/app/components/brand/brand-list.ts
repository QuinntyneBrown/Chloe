class BrandListComponent {
    constructor(brandStore:any) {
        this.brands = brandStore.items;        
    }

    brands: any[];
}

ngX.Component({
    component: BrandListComponent,
    templateUrl: "app/components/brand/brand-list.html",
    providers: ["brandStore"]
});