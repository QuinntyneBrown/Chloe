class EditBundleComponent {
    constructor() { }
}

ngX.Component({
    component: EditBrandComponent,
    selector: "edit-bundle",
    templateUrl: "app/components/bundle/edit-bundle.html",
    inputs: ["bundle"],
    styles: [
        `
        .edit-bundle {
            margin-bottom:30px;
        }

        .edit-bundle-form {
            margin-bottom:15px;
        }
        `
    ]
});