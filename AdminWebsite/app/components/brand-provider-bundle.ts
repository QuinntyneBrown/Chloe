class BrandProviderBundleComponent {

    constructor(brandStore, bundleStore, providerStore) {
        this.brands = brandStore.items;
        this.bundles = bundleStore.items;
        this.providers = providerStore.items;
    }

    brands: any[];
    bundles: any[];
    providers: any[];

    static canActivate = () => {
        return ["$q","brandActions", "bundleActions", "invokeAsync", "providerActions",
            (brandActions, bundleActions, invokeAsync, providerActions) => {

            }
        ];
    }
}


ngX.Component({
    route: "/brand/provider/bundle",
    component: BrandProviderBundleComponent,
    providers: ["brandStore","bundleStore","providerStore"]
});