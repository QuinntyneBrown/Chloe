class Brand {

    constructor(private $injector, private $location, private $q, private brandActions, private invokeAsync) { }

    createInstance = (options) => {
        var instance = new Brand(this.$injector, this.$location, this.$q, this.brandActions, this.invokeAsync);
        if (options && options.data) {
            instance.id = options.data.id;
            instance.name = options.data.name;
        }
        return instance;
    }
    
    id: number;     
    name: string;
    providers: any[] = [];
    pages: any[] = [];

    save = () => {
        return this.brandActions.add({
            data: {
                id: this.id,
                name: this.name,
                pages: this.pages,
                providers: this.providers
            }
        });
    }

    create = () => { this.$location.path("/brand/list"); }

    edit = () => { this.$location.path("/brand/edit/" + this.id); }

    remove = () => { return this.brandActions.remove({ id: this.id }); }
}

angular.module("app").service("brand",
    ["$injector", "$location", "$q", "brandActions", "invokeAsync", Brand]);
