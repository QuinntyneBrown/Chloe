class Provider {
    constructor(private $injector, private $q, private providerActions, private invokeAsync) { }

    createInstance = (options) => { return new Provider(this.$injector, this.$q, this.providerActions, this.invokeAsync); }

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
