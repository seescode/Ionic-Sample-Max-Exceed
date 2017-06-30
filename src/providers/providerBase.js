var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Users provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ProviderBase = (function () {
    function ProviderBase(http, routeName) {
        this.http = http;
        this.routeName = routeName;
        this.apiUrl = '';
        this.route = routeName;
    }
    ProviderBase.prototype.get = function (id) {
        return this.http.get(this.apiUrl + "/" + this.route + "/" + id).map(function (res) { return res.json(); });
    };
    ProviderBase.prototype.getList = function () {
        return this.http.get(this.apiUrl + "/" + this.route).map(function (res) { return res.json(); });
    };
    ProviderBase.prototype.create = function (resource) {
        var headers = new Headers();
        //headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.apiUrl + "/" + this.route, resource, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    ProviderBase.prototype.update = function (resource) {
        var headers = new Headers();
        //headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.apiUrl + "/" + this.route + "/" + resource.id, resource, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    ProviderBase.prototype.delete = function (resource) {
        var headers = new Headers();
        return this.http.delete(this.apiUrl + "/" + this.route + "/" + resource.id, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    return ProviderBase;
}());
ProviderBase = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, String])
], ProviderBase);
export { ProviderBase };
//# sourceMappingURL=providerBase.js.map