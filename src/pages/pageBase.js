var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ProviderBase } from '../providers/providerBase';
var PageBase = (function () {
    function PageBase(navCtrl, navParams, baseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.baseProvider = baseProvider;
        this.entityId = navParams.get('userId');
        //I dont know why but if I try to call the get method instead We do no suscribe properly
        this.baseProvider.get(this.entityId).subscribe(function (entity) {
            _this.entity = entity;
            console.log(entity);
        });
    }
    PageBase.prototype.get = function (entityId) {
        this.baseProvider.get(entityId).subscribe(this.suscribeEntity);
    };
    PageBase.prototype.update = function () {
        this.baseProvider.update(this.entity).subscribe(this.suscribeEntity);
    };
    PageBase.prototype.create = function () {
        //TODO: Refactor suscribe to method
        this.baseProvider.create(this.entity).subscribe(this.suscribeEntity);
    };
    PageBase.prototype.delete = function () {
        this.baseProvider.delete(this.entity).subscribe(function (result) {
            console.log(result);
        });
    };
    PageBase.prototype.suscribeEntity = function (entityData) {
        this.entity = entityData;
    };
    return PageBase;
}());
PageBase = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [NavController, NavParams, ProviderBase])
], PageBase);
export { PageBase };
//# sourceMappingURL=pageBase.js.map