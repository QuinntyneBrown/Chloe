class Page {
    constructor(private $injector, private $location, private $q, private pageActions, private invokeAsync) { }

    createInstance = (options) => {
        var instance = new Page(this.$injector, this.$location, this.$q, this.pageActions, this.invokeAsync);
        if (options && options.data) {
            instance.id = options.data.id;
            instance.name = options.data.name;
        }
        return instance;
    }

    id: number;
    name: string;
    components:any[];

    save = () => {
        return this.pageActions.add({
            data: {
                id: this.id,
                name: this.name,
                components: this.components
            }
        });
    }

    remove = () => { return this.pageActions.remove({ id: this.id }); }

    create = () => { this.$location.path("/page/list"); }

    edit = () => { this.$location.path("/page/edit/" + this.id); }
}

angular.module("app").service("page",
    ["$injector", "$location", "$q", "pageActions", "invokeAsync", Page]);
