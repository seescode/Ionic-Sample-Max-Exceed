import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import { ProfilePage } from '../pages/profile/profile';

import { Users } from '../providers/users'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InlineEditComponent } from '../components/custom/inline-edit/inline-edit';
import { CrudLayoutComponent } from '../components/custom/crud-layout/crud-layout';
import { EditableFormComponent } from '../components/custom/editable-form/editable-form';
import { PageListBaseComponent } from '../components/custom/page-list-base/page-list-base';
import { AstootLayoutComponent } from "../components/custom/astoot-layout/astoot-layout";


import { httpFactory } from '../rules/http-factory/http-factory'

@NgModule({
  declarations: [
      MyApp,
      UsersPage,
      ProfilePage,
      InlineEditComponent,
      EditableFormComponent,
      AstootLayoutComponent,
      CrudLayoutComponent,
      PageListBaseComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      UsersPage,
      ProfilePage
  ],
  providers: [
    Users,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] }
  ]
})
export class AppModule {}
