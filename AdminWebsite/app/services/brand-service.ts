class BrandService {
    constructor(private $q, private apiEndpoint, private fetch) { }

    get() {
        var deferred = this.$q.defer();
        this.fetch.fromService({ method: "GET", url: this.baseUri + "/get" }).then((results) => {
            deferred.resolve(results.data);
        });
        return deferred.promise;
    };
    
    getPagesByBrandId(options) {
        var deferred = this.$q.defer();
        this.fetch.fromService({ method: "GET", url: this.baseUri + "/getPagesByBrandId", params: { id: options.id } }).then((results) => {
            deferred.resolve(results.data);
        });
        return deferred.promise;
    };

    getProvidersByBrandId(options) {
        var deferred = this.$q.defer();
        this.fetch.fromService({ method: "GET", url: this.baseUri + "/getProvidersByBrandId", params: { id: options.id } }).then((results) => {
            deferred.resolve(results.data);
        });
        return deferred.promise;
    };

    add(options) {
        var deferred = this.$q.defer();
        this.fetch.fromService({ method: "POST", url: this.baseUri + "/add", data: options.data }).then((results) => {
            deferred.resolve(results.data);
        });
        return deferred.promise;
    };

    remove(options) {
        var deferred = this.$q.defer();
        this.fetch.fromService({ method: "DELETE", url: this.baseUri + "/remove", params: {id: options.id} }).then((results) => {
            deferred.resolve(results.data);
        });
        return deferred.promise;
    };

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/brand"; }

}

angular.module("app").service("brandService", ["$q","apiEndpoint","fetch",BrandService]);
