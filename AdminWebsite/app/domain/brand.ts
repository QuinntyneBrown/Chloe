class Brand {

    constructor(private $injector, private $q, private brandActions, private invokeAsync) { }

    createInstance = () => { return new Brand(this.$injector, this.$q, this.brandActions, this.invokeAsync); }
    
    id: number;
     
    name: string;
    
    save = () => {
        return this.brandActions.add({
            data: {
                name: this.name
            }
        });
    }

    remove = () => {
        return this.brandActions.remove({ id: this.id });
    }
}

angular.module("app").service("brand",
    ["$injector", "$q", "brandActions", "invokeAsync", Brand]);
