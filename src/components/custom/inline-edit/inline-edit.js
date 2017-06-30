var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef, ViewChild, Renderer, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return InlineEditComponent; }),
    multi: true
};
var InlineEditComponent = (function () {
    function InlineEditComponent(element, _renderer) {
        this._renderer = _renderer;
        this.label = '';
        this.type = 'text';
        this.required = false;
        this.disabled = false;
        this._value = '';
        this.preValue = '';
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(InlineEditComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    InlineEditComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    InlineEditComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    InlineEditComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    InlineEditComponent.prototype.ngOnInit = function () {
    };
    return InlineEditComponent;
}());
__decorate([
    ViewChild('inlineEditControl'),
    __metadata("design:type", ElementRef)
], InlineEditComponent.prototype, "inlineEditControl", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], InlineEditComponent.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], InlineEditComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], InlineEditComponent.prototype, "required", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], InlineEditComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], InlineEditComponent.prototype, "editOptions", void 0);
InlineEditComponent = __decorate([
    Component({
        selector: 'inline-edit',
        templateUrl: 'inline-edit.html',
        providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer])
], InlineEditComponent);
export { InlineEditComponent };
//# sourceMappingURL=inline-edit.js.map