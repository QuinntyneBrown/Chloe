class Component {

    constructor(private $injector, private $location, private $q, private componentActions, private invokeAsync) { }

    createInstance = (options) => {
        var instance = new Component(this.$injector, this.$location, this.$q, this.componentActions, this.invokeAsync);
        if (options && options.data) {
            instance.id = options.data.id;
            instance.name = options.data.name;
        }
        return instance;
    }

    id: number;
    name: string;

    save = () => {
        return this.componentActions.add({
            data: {
                id: this.id,
                name: this.name
            }
        });
    }

    remove = () => { return this.componentActions.remove({ id: this.id }); }

    create = () => { this.$location.path("/component/list"); }

    edit = () => { this.$location.path("/component/edit/" + this.id); }

}

angular.module("app").service("component",
    ["$injector", "$location", "$q", "componentActions", "invokeAsync", Component]);
