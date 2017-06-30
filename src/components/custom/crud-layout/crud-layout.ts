import { Component, Input } from '@angular/core';
import { PageBase } from '../../../pages/pageBase';
import { IHasId } from '../../../interfaces/interfaces';

@Component({
  selector: 'crud-layout',
  templateUrl: 'crud-layout.html'
})
export class CrudLayoutComponent {

  @Input() basePage: PageBase<IHasId>;

  update() {
      this.basePage.update();
  }
}
