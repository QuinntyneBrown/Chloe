class ComponentListComponent {
    constructor(private component, private componentStore) { }
    
    onInit = () => {
        this.modelInstance = this.component.createInstance();
        this.items = [];
        for (var i = 0; i < this.componentStore.items.length; i++) {
            this.items.push(this.component.createInstance({
                data: this.componentStore.items[i]
            }));
        }
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