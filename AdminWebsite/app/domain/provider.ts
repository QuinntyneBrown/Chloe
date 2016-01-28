class Provider {
    constructor(private $injector, private $location, private $q, private providerActions, private invokeAsync) { }

    createInstance = (options) => {
        var instance = new Provider(this.$injector, this.$location, this.$q, this.providerActions, this.invokeAsync);
        if (options && options.data) {
            instance.id = options.data.id;
            instance.name = options.data.name;
        }
        return instance;
    }

    id: number;
    name: string;
    bundles: any[] = [];

    save = () => {
        return this.providerActions.add({
            data: {
                id: this.id,
                name: this.name,
                bundles: this.bundles
            }
        });
    }

    remove = () => { return this.providerActions.remove({ id: this.id }); }

    edit = () => { this.$location.path("/provider/edit/" + this.id); }
}

angular.module("app").service("provider",
    ["$injector", "$location","$q", "providerActions", "invokeAsync", Provider]);
