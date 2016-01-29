class EditBrandComponent {
}

ngX.Component({
    component: EditBrandComponent,
    selector: "edit-brand",
    templateUrl: "app/components/brand/edit-brand.html",
    inputs: ["brand"],
    styles: [
        `
        .edit-brand-association {
            position:relative;
            float:left;
            width: 200px
        }

        .edit-brand {
            margin-bottom:30px;
        }

        .edit-brand-associations {
            margin-top:15px;
            margin-bottom:15px;
        }
        `
    ]

});