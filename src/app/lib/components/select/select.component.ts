import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options: any[] = [];
  isExpanded: boolean = false;
  value: any;
  onChange: any = () => {};
  onTouched: any = () => {};
  isDisabled: boolean = false;
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  validate(c: FormControl) {
    return null;
  }

  onSelectChange(event: any) {
    this.onChange(this.value);
    this.onTouched();
  }

  collable() {
    this.isExpanded = false;
  }

  expand() {
    this.isExpanded = true;
  }

  selectItem(event: any, value: any) {
    this.value = value;
    this.onSelectChange(event);
    this.collable();
  }
}
