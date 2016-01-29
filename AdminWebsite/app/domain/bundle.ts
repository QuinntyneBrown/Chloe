class Bundle {

    constructor(private $injector, private $location, private $q, private bundleActions, private invokeAsync) { }

    createInstance = (options) => {
        var instance = new Bundle(this.$injector, this.$location, this.$q, this.bundleActions, this.invokeAsync);
        if (options && options.data) {
            instance.id = options.data.id;
            instance.name = options.data.name;
        }
        return instance;
    }

    id: number;
    name: string;
    logo: string;

    save = () => {
        return this.bundleActions.add({
            data: {
                id: this.id,
                name: this.name
            }
        });
    }

    editModelHtml = "<edit-bundle bundle='model'></edit-bundle>";

    cancel = () => { this.bundleActions.cancel(); }

    create = () => { this.bundleActions.create({ model: this }); }

    remove = () => { return this.bundleActions.remove({ id: this.id }); }

    edit = () => this.bundleActions.edit({ model: this }); 
}

angular.module("app").service("bundle",
    ["$injector", "$location","$q", "bundleActions", "invokeAsync", Bundle]);
