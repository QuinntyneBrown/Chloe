class PageListComponent {
    constructor(private component, private componentStore, private page, private pageStore) { }

    onInit = () => {
        this.modelInstance = this.page.createInstance();
        this.modelInstance.components = [];
        this.items = [];
        for (var i = 0; i < this.pageStore.items.length; i++) {
            this.items.push(this.page.createInstance({
                data: this.pageStore.items[i]
            }));
        }

        for (var i = 0; i < this.componentStore.items.length; i++) {
            var component = this.component.createInstance({
                data: this.componentStore.items[i]
            });
            for (var x = 0; x < this.pageStore.componentsByPage.length; x++) {
                if (component.id == this.pageStore.componentsByPage[x].id) {
                    component.checked = true;
                }
            }
            this.modelInstance.components.push(component);
        } 
    }

    items: any[] = [];

    modelInstance: any;

    storeOnChange = () => { this.onInit(); }

    static canActivate() {
        return ["$q", "componentActions", "pageActions", "invokeAsync", ($q, componentActions, pageActions, invokeAsync) => {
            var promises = [];
            promises.push(invokeAsync(pageActions.all));
            promises.push(invokeAsync(componentActions.all));
            return $q.all(promises);
        }];
    }
}

ngX.Component({
    component: PageListComponent,
    routes: ["/page/list", "/page/edit/:id"],
    templateUrl: "app/components/page/page-list.html",
    providers: ["component","componentStore","page","pageStore"]
});