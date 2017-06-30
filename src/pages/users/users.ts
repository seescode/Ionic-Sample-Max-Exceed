import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';

import { Users } from '../../providers/users';
import { ProfilePage } from '../profile/profile';
import { PageListBaseComponent } from '../../components/custom/page-list-base/page-list-base'
import { ProviderBase } from "../../providers/providerBase";
import { PageListConfiguration } from "../../models/pageListConfiguration";

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

    public pageName: string = "Users";

    public userDetailType: any = ProfilePage;
    public pageListConfiguration: PageListConfiguration = { canDelete: false, canCreate: true };

  constructor(public navCtrl: NavController, public navParams: NavParams, public baseProvider: Users) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
