class BrandList {

    constructor(brandStore:any) {
        this.brands = brandStore.items;
    }

    brands: any[];

}

ngX.Component({
    route: "/brand/list",
    selector: "edit-brand",
    templateUrl: "",
    providers: ["brandStore"]
});