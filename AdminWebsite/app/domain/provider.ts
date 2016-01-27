class Provider {
    constructor(private $injector, private $q, private providerActions, private invokeAsync) { }

    createInstance = (options) => {
        var instance = new Provider(this.$injector, this.$q, this.providerActions, this.invokeAsync);
        if (options && options.data) {
            instance.id = options.data.id;
            instance.name = options.data.name;
        }
        return instance;
    }

    id: number;

    name: string;

    save = () => {
        return this.providerActions.add({
            data: {
                name: this.name
            }
        });
    }

    remove = () => {
        return this.providerActions.remove({ id: this.id });
    }
}

angular.module("app").service("provider",
    ["$injector", "$q", "providerActions", "invokeAsync", Provider]);
