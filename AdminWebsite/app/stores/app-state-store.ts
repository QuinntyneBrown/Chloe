class AppStateStore {
    constructor(private dispatcher, private APP_STATE_ACTIONS) { }

    currentBrand: any;
    currentBundle: any;
    currentComponent: any;
    currentPage: any;
    currentProvider: any;

    public registerListeners = () => {

    }
}

ngX.Store({ store: AppStateStore, providers: ["dispatcher", "APP_STATE_ACTIONS"] });