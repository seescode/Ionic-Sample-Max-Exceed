var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { MyApp } from './app.component';
import { UsersPage } from '../pages/users/users';
import { ProfilePage } from '../pages/profile/profile';
import { Users } from '../providers/users';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InlineEditComponent } from '../components/custom/inline-edit/inline-edit';
import { CrudLayoutComponent } from '../components/custom/crud-layout/crud-layout';
import { EditableFormComponent } from '../components/custom/editable-form/editable-form';
import { httpFactory } from '../rules/http-factory/http-factory';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            UsersPage,
            ProfilePage,
            InlineEditComponent,
            EditableFormComponent,
            CrudLayoutComponent
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map