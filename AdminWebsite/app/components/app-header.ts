class AppHeader {
    constructor(private $route) { }

    getCurrentPath() { return this.$route.current.$$route.originalPath; }
}

ngX.Component({
    component: AppHeader,
    selector: "app-header",
    templateUrl: "app/components/app-header.html",
    styles: `

        .app-header {
            height:35px;
        }

        .app-header a {
            padding:7.5px;
            text-transform: uppercase;
        }

        .app-header a.selected { font-weight:800; background-color:#F36C81; color:#EEE; }

        `,
    providers: ["$route"]
});