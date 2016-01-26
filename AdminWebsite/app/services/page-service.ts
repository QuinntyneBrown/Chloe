﻿class PageService {
    constructor(private $q, private apiEndpoint, private fetch) { }

    get(options) {
        var deferred = this.$q.defer();
        this.fetch.fromService({ method: "GET", url: this.baseUri + "/get" }).then(function (results) {
            deferred.resolve(results.data);
        });
        return deferred.promise;
    };

    add(options) {
        var deferred = this.$q.defer();
        this.fetch.fromService({ method: "POST", url: this.baseUri + "/add", data: options.data }).then(function (results) {
            deferred.resolve(results.data);
        });
        return deferred.promise;
    };

    remove(options) {
        var deferred = this.$q.defer();
        this.fetch.fromService({ method: "DELETE", url: this.baseUri + "/remove", params: { id: options.id } }).then(function (results) {
            deferred.resolve(results.data);
        });
        return deferred.promise;
    };

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/page"; }

}

angular.module("app").service("pageService", ["$q", "apiEndpoint", "fetch", PageService]);