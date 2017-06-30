var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Users } from '../../providers/users';
import { ProfilePage } from '../profile/profile';
/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var UsersPage = (function () {
    function UsersPage(navCtrl, navParams, usersProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersProvider = usersProvider;
        usersProvider.getList().subscribe(function (users) {
            _this.users = users;
            console.log(users);
        });
    }
    UsersPage.prototype.goToUserProfile = function (userId) {
        this.navCtrl.push(ProfilePage, { userId: userId });
    };
    UsersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsersPage');
    };
    return UsersPage;
}());
UsersPage = __decorate([
    Component({
        selector: 'page-users',
        templateUrl: 'users.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Users])
], UsersPage);
export { UsersPage };
//# sourceMappingURL=users.js.map