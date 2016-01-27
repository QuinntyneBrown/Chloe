class Bundle {

    constructor(private $injector, private $q, private bundleActions, private invokeAsync) { }

    createInstance = (options) => { return new Bundle(this.$injector, this.$q, this.bundleActions, this.invokeAsync); }

    id: number;

    name: string;

    save = () => {
        return this.bundleActions.add({
            data: {
                name: this.name
            }
        });
    }

    remove = () => {
        return this.bundleActions.remove({ id: this.id });
    }
}

angular.module("app").service("bundle",
    ["$injector", "$q", "bundleActions", "invokeAsync", Bundle]);
