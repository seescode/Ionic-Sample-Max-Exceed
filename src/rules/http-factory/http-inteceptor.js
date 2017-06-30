var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { ConnectionBackend, RequestOptions, Http, Headers } from "@angular/http";
import { environment } from "../environments/environment";
var HttpInterceptor = (function (_super) {
    __extends(HttpInterceptor, _super);
    function HttpInterceptor(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    HttpInterceptor.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options);
    };
    HttpInterceptor.prototype.get = function (url, options) {
        url = this.updateUrl(url);
        return _super.prototype.get.call(this, url, this.getRequestOptionArgs(options));
    };
    HttpInterceptor.prototype.post = function (url, body, options) {
        url = this.updateUrl(url);
        //.subscribe(
        //    data => this.saveJwt(data.id_token),
        //    err => this.logError(err),
        //    () => console.log('Authentication Complete')
        //);
        return _super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options));
    };
    HttpInterceptor.prototype.put = function (url, body, options) {
        url = this.updateUrl(url);
        return _super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options));
    };
    HttpInterceptor.prototype.delete = function (url, options) {
        url = this.updateUrl(url);
        return _super.prototype.delete.call(this, url, this.getRequestOptionArgs(options));
    };
    HttpInterceptor.prototype.updateUrl = function (req) {
        return environment.origin + req;
    };
    HttpInterceptor.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');
        return options;
    };
    return HttpInterceptor;
}(Http));
HttpInterceptor = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConnectionBackend, RequestOptions])
], HttpInterceptor);
export { HttpInterceptor };
//# sourceMappingURL=http-inteceptor.js.map