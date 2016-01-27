class ComponentActions {
    constructor(private componentService,
        private dispatcher,
        private guid,
        private COMPONENT_ACTIONS
    ) { }

    all = () => {
        var newGuid = this.guid();
        this.componentService.get().then((results) => {
            this.dispatcher.emit({
                actionType: this.COMPONENT_ACTIONS.ALL,
                options: { data: results, id: newGuid }
            });
        });
        return newGuid;
    }

    add = (options) => {
        var newGuid = this.guid();
        this.componentService.add(options).then((results) => {
            this.dispatcher.emit({
                actionType: this.COMPONENT_ACTIONS.ADDED,
                options: { data: results, id: newGuid }
            });
        });
        return newGuid;
    }

    remove = (options) => {
        var newGuid = this.guid();
        this.componentService.remove(options).then((results) => {
            this.dispatcher.emit({
                actionType: this.COMPONENT_ACTIONS.REMOVED,
                options: { data: options.id, id: newGuid }
            });
        });
        return newGuid;
    }
}

angular.module("app").service("componentActions", ["componentService", "dispatcher", "guid", "COMPONENT_ACTIONS", ComponentActions]);