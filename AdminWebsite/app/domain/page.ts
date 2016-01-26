class Page {
    constructor(private $injector, private $q, private pageActions, private invokeAsync) { }

    createInstance = () => { return new Page(this.$injector, this.$q, this.pageActions, this.invokeAsync); }

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
