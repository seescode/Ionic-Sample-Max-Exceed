import { Component, Input } from '@angular/core';
import { UsersPage } from "../../../pages/users/users";
import { ProfilePage } from "../../../pages/profile/profile";
import { Tabs } from 'ionic-angular';

/*
  Generated class for the AstootLayout component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'astoot-layout',
  templateUrl: 'astoot-layout.html'
})
export class AstootLayoutComponent {
    
  @Input() pageName: string;

  usersPage: any = UsersPage;
  profilePage: any = ProfilePage;

}
