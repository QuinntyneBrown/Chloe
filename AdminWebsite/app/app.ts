/// <reference path="../typings/angularjs/angular.d.ts" />

angular.module("app", ["ngX"]).config(["$routeProvider", "apiEndpointProvider", ($routeProvider: any, apiEndpointProvider:any) => {

    $routeProvider.when("/brand/list", {
        componentName: "brandListComponent"
    });
    
    $routeProvider.when("/bundle/list", {
        componentName: "bundleList"
    });

    $routeProvider.when("/component/list", {
        componentName: "componentList"
    });
    
    $routeProvider.when("/page/list", {
        componentName: "pageListComponent"
    });

    $routeProvider.when("/provider/list", {
        componentName: "providerListComponent"
    });
    
    $routeProvider.otherwise("/brand/list");

    apiEndpointProvider.configure("http://moderncms.azurewebsites.net/api");

}]);