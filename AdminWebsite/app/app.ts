angular.module("app", ["ngX","ngX.components","templates"]).config(["$routeProvider", "apiEndpointProvider", ($routeProvider: any, apiEndpointProvider:any) => {
    $routeProvider.when("/", { componentName: "homeComponent" })
        .when("/brand/list", { componentName: "brandListComponent" })
        .when("/bundle/list", { componentName: "bundleListComponent" })
        .when("/component/list", { componentName: "componentListComponent" })
        .when("/page/list", { componentName: "pageListComponent" })
        .when("/provider/list", { componentName: "providerListComponent" })
        .otherwise("/");    
    apiEndpointProvider.configure("http://localhost:54965/api");
}]);