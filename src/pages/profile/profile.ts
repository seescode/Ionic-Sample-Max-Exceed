import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { Users } from '../../providers/users';
import { PageBase } from '../pageBase';
import moment from 'moment';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage extends PageBase<User> {

    pageName: string = "Profile";

    constructor(public navCtrl: NavController, public navParams: NavParams, public usersProvider: Users) {
        super(navCtrl, navParams, usersProvider);
    }

    getAge = () => {
        if (this.entity) {
            return moment().diff(this.entity.birthday, 'years');
        }
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ProfilePage');
    }
}