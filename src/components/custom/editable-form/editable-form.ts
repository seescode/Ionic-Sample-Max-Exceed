import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EditOptions } from '../../../models/editOptions';
import { InlineEditComponent } from '../inline-edit/inline-edit';
import { AfterContentInit, ContentChildren, Directive, QueryList, Input } from '@angular/core';
import { PageBase } from "../../../pages/pageBase";
import { IHasId } from "../../../interfaces/interfaces";

@Component({
  selector: 'editable-form',
  templateUrl: 'editable-form.html'
})
export class EditableFormComponent {

    @Input() basePage: PageBase<IHasId>;

    save() {
        this.basePage.save();
    }

    //@ContentChildren(InlineEditComponent) editiableComponents: QueryList<InlineEditComponent>;
    editOptions: EditOptions = { isEditing: false };
    isEditing: boolean = false;

    toggleEdit() {
        this.editOptions.isEditing = !this.editOptions.isEditing;
    }

    getEditOptions() {
        return this.editOptions;
    }
}
