import { Component, forwardRef, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SchemaService } from './schema.service';

@Component({
  selector: "swagger",
  templateUrl: "swagger.component.html",
  styleUrls: ["swagger.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useValue: forwardRef(() => SwaggerComponent),
      multi: true
    }
  ]
})
export class SwaggerComponent implements ControlValueAccessor, OnInit {

  @Input("schema-path")
  public schemaPath: string;
  public schema;

  @Input()
  private disabled: boolean;

  private changeListener = [];
  public registerOnChange(fn : (value: any) => void) {
    this.changeListener.push(fn);
  }

  private touchListener = [];
  public registerOnTouched(fn) {
    this.touchListener.push(fn);
  }

  @Input()
  private _value;
  get value() {
    return this._value;
  }
  set value(value) {
    if(this._value !== value) {
      this._value = value;
      this.changeListener.forEach(listener => {
        listener(value);
      });
    }
  }

  constructor(private schemaService: SchemaService) {

  }

  ngOnInit() {
    if(this.schemaPath) {
      this.schemaService.getPropertySchema(this.schemaPath).subscribe(
        schema => {
          this.schema = schema;
        }
      )
    }
  }

  writeValue(obj: any): void {
    if(obj === null) {
      return;
    }
    this.value = obj;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}