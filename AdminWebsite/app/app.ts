/// <reference path="../typings/angularjs/angular.d.ts" />

angular.module("app", ["ngX"]).config(["$routeProvider", ($routeProvider: any) => {

    $routeProvider.when("/brand/edit/:id", {
        componentName: "editBrand"
    });

    $routeProvider.when("/brand/list", {
        componentName: "brandList"
    });


    $routeProvider.when("/page/edit/:id", {
        componentName: "pageEdit"
    });

    $routeProvider.when("/page/list", {
        componentName: "pageList"
    });

    $routeProvider.when("/component/edit/:id", {
        componentName: "editComponent"
    });

    $routeProvider.when("/component/list", {
        componentName: "componentList"
    });


    $routeProvider.otherwise("/brand/list");
}]);