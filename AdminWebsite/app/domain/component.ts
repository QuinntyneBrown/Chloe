class Component {


}

angular.module("app").service("component",
    ["$injector", "$q", "componentActions", "invokeAsync", Component]);
