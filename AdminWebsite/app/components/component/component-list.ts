class ComponentListComponent {
    constructor(componentStore: any) { this.items = componentStore.items; }

    items: any[];

    static canActivate() {
        return ["componentActions", "invokeAsync", (componentActions, invokeAsync) => {
            return invokeAsync(componentActions.all);
        }];
    }
}

ngX.Component({
    component: ComponentListComponent,
    route: "/component/list",
    templateUrl: "app/components/component/component-list.html",
    components: ["componentStore"]
});