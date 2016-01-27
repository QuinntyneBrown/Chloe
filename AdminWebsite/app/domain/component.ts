class Component {

    constructor(private $injector, private $q, private componentActions, private invokeAsync) { }

    createInstance = (options) => { return new Brand(this.$injector, this.$q, this.componentActions, this.invokeAsync); }

    id: number;

    name: string;

    save = () => {
        return this.componentActions.add({
            data: {
                name: this.name
            }
        });
    }

    remove = () => {
        return this.componentActions.remove({ id: this.id });
    }
}

angular.module("app").service("component",
    ["$injector", "$q", "componentActions", "invokeAsync", Component]);
