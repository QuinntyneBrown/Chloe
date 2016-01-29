class Modal {
    constructor(private $compile, private $location, private $q, private $rootScope, private appendToBodyAsync, private backDrop, private extendCssAsync, private removeElement, private setOpacityAsync) { }

    openAsync = (options) => {
        var openAsyncFn = () => {
            this._html = options.html;
            this.options = { model: options.model };
            return this.initializeAsync()
                .then(this.backDrop.openAsync)
                .then(this.appendModalToBodyAsync)
                .then(this.showAsync);
        }

        if (options.resolve) {
            options.resolve().then(() => { setTimeout(openAsyncFn, 100); });
        } else {
            setTimeout(openAsyncFn, 100);
        }

    }

    initializeAsync = () => {
        var deferred = this.$q.defer();
        this.$scope = this.$rootScope.$new();
        this.$scope.model = this.options.model;                
        this.compileAsync().then(() => {
            this.nativeElement = this.augmentedJQuery[0];
            this.extendCssAsync({
                nativeHTMLElement: this.nativeElement,
                cssObject: {
                    "opacity": "100",
                    "position": "fixed",
                    "top": "0",
                    "left": "0",
                    "background-color":"#FFF",
                    "display": "block",
                    "z-index": "999",
                    "width": "100%",
                    "padding": "30px"
                }
            }).then(function () {
                deferred.resolve();
            });
            
        });
        return deferred.promise;
    }
    
    compileAsync = () => {
        var deferred = this.$q.defer();
        this.augmentedJQuery = this.$compile(angular.element(this.html))(this.$scope);
        setTimeout(() => {            
            this.$scope.$digest()
            deferred.resolve();
        },100);
        return deferred.promise;
    }


    appendModalToBodyAsync = () => this.appendToBodyAsync({ nativeElement: this.nativeElement }); 

    showAsync = () => this.setOpacityAsync({ nativeHtmlElement: this.nativeElement, opacity: 100 }); 

    closeAsync = () => {        
        var deferred = this.$q.defer();  
        try {
            this.extendCssAsync({
                nativeHTMLElement: this.nativeElement,
                cssObject: {
                    "opacity": "0",
                }
            })
                .then(this.backDrop.closeAsync)
                .then(() => {
                    this.augmentedJQuery[0].parentNode.removeChild(this.augmentedJQuery[0]);
                    deferred.resolve();
                });
        } catch (error) {
            deferred.resolve();
        }      
        return deferred.promise;
    }

    dispose = () => { }

    get html() { return this._html; }

    options;
    $scope;
    augmentedJQuery;
    nativeElement;
    _html;
}

angular.module("app").service("modal", ["$compile", "$location", "$q", "$rootScope", "appendToBodyAsync", "backDrop", "extendCssAsync", "removeElement", "setOpacityAsync",Modal]);
