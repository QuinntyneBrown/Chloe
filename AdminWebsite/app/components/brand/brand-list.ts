class BrandListComponent {
    constructor(brandStore: any) { this.items = brandStore.items; }

    items: any[];

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
    providers: ["brandStore"]
});