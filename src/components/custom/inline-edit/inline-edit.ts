import {
    Component,
    Input,
    ElementRef,
    ViewChild,
    Renderer,
    forwardRef,
    OnInit
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EditOptions } from '../../../models/editOptions';

const INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InlineEditComponent),
    multi: true
};

@Component({
  selector: 'inline-edit',
  templateUrl: 'inline-edit.html',
  providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
})
export class InlineEditComponent implements ControlValueAccessor, OnInit {

    @ViewChild('inlineEditControl') inlineEditControl: ElementRef;
    @Input() label: string = '';
    @Input() type: string = 'text';
    @Input() required: boolean = false;
    @Input() disabled: boolean = false;
    @Input() editOptions: EditOptions;
    private _value: string = '';
    private preValue: string = '';
    public onChange: any = Function.prototype;
    public onTouched: any = Function.prototype;

    get value(): any {
        return this._value;
    }

    set value(v: any) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }

    writeValue(value: any) {
        this._value = value;
    }

    public registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }

    constructor(element: ElementRef, private _renderer: Renderer) {
    }

    ngOnInit() {
    }

}
