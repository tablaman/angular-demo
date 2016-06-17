import { Component } from 'angular2/core';
import {  CORE_DIRECTIVES,
          FORM_DIRECTIVES,
          FormBuilder,
          ControlGroup,
          Validators,
          AbstractControl
         } from 'angular2/common';


@Component({
  selector: 'demo-form-with-validations-explicit',
  // selector: 'demo-form-sku-builder',
  templateUrl: 'app/forms/demo-form-component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class DemoFormSku {
  myForm: ControlGroup;
  sku: AbstractControl
  
  constructor(fb: FormBuilder) {
    this.myForm = fb.group ({
      'sku': ['', Validators.required]
    });
    this.sku = this.myForm.controls['sku'];
  }
  
  onSubmit(value: string):void {
    console.log('you submitted value: ', value);
    
  }
}