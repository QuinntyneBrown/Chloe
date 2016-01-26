class Brand {


}

angular.module("app").service("brand",
    ["$injector", "$q", "bidActions", "invokeAsync", "messageActions", "numeral", Brand]);
