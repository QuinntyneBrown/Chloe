class EditProviderComponent {
    constructor() { }
    
}

ngX.Component({
    component: EditProviderComponent,
    selector: "edit-provider",
    templateUrl: "app/components/provider/edit-provider.html",
    inputs: ["provider"],
    styles: [
        `
        .edit-provider {
            margin-bottom:30px;
        }

        .edit-provider-form {
            margin-bottom:15px;
        }
        `
    ]
});