class Page {
    constructor(private $injector, private $q, private pageActions, private invokeAsync) { }

    createInstance = (options) => {
        var instance = new Page(this.$injector, this.$q, this.pageActions, this.invokeAsync);
        if (options && options.data) {
            instance.id = options.data.id;
            instance.name = options.data.name;
        }
        return instance;
    }

    id: number;

    name: string;

    save = () => {
        return this.pageActions.add({
            data: {
                name: this.name
            }
        });
    }

    remove = () => {
        return this.pageActions.remove({ id: this.id });
    }
}

angular.module("app").service("page",
    ["$injector", "$q", "pageActions", "invokeAsync", Page]);
