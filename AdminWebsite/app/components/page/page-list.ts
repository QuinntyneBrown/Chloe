class PageListComponent {
    constructor(pageStore: any) { this.items = pageStore.items; }

    items: any[];

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
    providers: ["pageStore"]
});