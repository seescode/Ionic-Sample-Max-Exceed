import { ProfilePage } from './../profile/profile';
import { UsersPage } from './../users/users';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  usersPage: any = UsersPage;
  profilePage: any = ProfilePage;

  constructor() {

  }
}
