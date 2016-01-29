class ComponentListComponent {
    constructor(private component, private componentStore) { }
    
    onInit = () => {
        this.modelInstance = this.component.createInstance();
        this.items = [];
        this.componentStore.items.forEach((item) => {
            this.items.push(this.component.createInstance({ data: item }));
        });
    }

    items: any[];
    modelInstance: any;

    static canActivate() {
        return ["componentActions", "invokeAsync", (componentActions, invokeAsync) => {
            return invokeAsync(componentActions.all);
        }];
    }
    
    storeOnChange = () => { this.onInit(); }
}

ngX.Component({
    component: ComponentListComponent,
    routes: ["/component/list", "/component/edit/:id"],
    templateUrl: "app/components/component/component-list.html",
    components: ["component","componentStore"]
});