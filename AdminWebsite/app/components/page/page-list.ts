class PageListComponent {
    constructor(private page, private pageStore) {
        this.modelInstance = this.page.createInstance();
        this.items = [];
        for (var i = 0; i < this.pageStore.items.length; i++) {
            this.items.push(this.page.createInstance({
                data: this.pageStore.items[i]
            }));
        }
    }

    items: any[] = [];

    modelInstance: any;

    storeOnChange = () => {
        this.modelInstance = this.page.createInstance();
        this.items = [];
        for (var i = 0; i < this.pageStore.items.length; i++) {
            this.items.push(this.page.createInstance({
                data: this.pageStore.items[i]
            }));
        }
    }
    static canActivate() {
        return ["pageActions", "invokeAsync", (pageActions, invokeAsync) => {
            return invokeAsync(pageActions.all);
        }];
    }
}

ngX.Component({
    component: PageListComponent,
    route: "/page/list",
    templateUrl: "app/components/page/page-list.html",
    providers: ["page","pageStore"]
});