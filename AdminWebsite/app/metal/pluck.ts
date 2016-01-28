function pluck(options) {
    var result = null;
    for (var i = 0; i < options.items.length; i++) {
        if (options.value == options.items[i][options.key || "id"]) {
            result = options.items[i];
        }
    }
    return result;
}

angular.module("app").value("pluck", pluck);