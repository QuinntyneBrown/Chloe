class AppHeader {
    constructor() { }
}

ngX.Component({
    component: AppHeader,
    selector: "app-header",
    templateUrl: "app/components/app-header.html",
    styles: `

.app-header a {
    padding-right:15px;
    line-height:2em;
    text-transform: uppercase;
}


`
});