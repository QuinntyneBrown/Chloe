class Bundle {


}

angular.module("app").service("bundle",
    ["$injector", "$q", "bidActions", "invokeAsync", "messageActions", "numeral", Bundle]);
