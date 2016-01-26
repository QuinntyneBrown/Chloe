class PageActions {
    constructor(private pageService,
        private dispatcher,
        private guid,
        private PAGE_ACTIONS
    ) { }

    all = () => {
        var newGuid = this.guid();
        this.pageService.get().then(function (results) {
            this.dispatcher.emit({
                actionType: this.PAGE_ACTIONS.ALL,
                options: { data: results, id: newGuid }
            });
        });
        return newGuid;
    }

    add = (options) => {
        var newGuid = this.guid();
        this.pageService.add(options).then(function (results) {
            this.dispatcher.emit({
                actionType: this.PAGE_ACTIONS.ADDED,
                options: { data: results, id: newGuid }
            });
        });
        return newGuid;
    }

    remove = (options) => {
        var newGuid = this.guid();
        this.pageService.remove(options).then(function (results) {
            this.dispatcher.emit({
                actionType: this.PAGE_ACTIONS.REMOVED,
                options: { data: results, id: newGuid }
            });
        });
        return newGuid;
    }
}

angular.module("app").service("pageActions", ["pageService", "dispatcher", "guid", "PAGE_ACTIONS", PageActions]);