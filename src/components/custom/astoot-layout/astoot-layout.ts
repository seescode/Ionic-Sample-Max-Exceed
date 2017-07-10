import { Component, Input } from '@angular/core';
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
}
