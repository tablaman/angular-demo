import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { DemoFormSku } from './demo-form.component'


@Component({
  templateUrl: 'app/forms/forms.component.html',
  directives: [ DemoFormSku ]
})

export class FormsComponent implements OnInit {
  pageTitle: string = 'Forms';


  ngOnInit(): void {
    console.log('ng onInit: Forms Component');

  }

}