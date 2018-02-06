import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { FormsComponent } from './forms/forms.component';
import { DemoFormSku } from './forms/demo-form.component';
import 'rxjs/Rx'; // Load all features

@Component ({
  selector: 'pm-app',
  template: `
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <a href="" class="navbar-brand">{{pageTitle}}</a>
        <ul class="nav navbar-nav">
          <li><a [routerLink]="['Welcome']">Home</a></li>
          <li><a [routerLink]="['Products']">Product List</a></li>
          <li><a [routerLink]="['Forms']">Forms</a></li>
          <li><a [routerLink]="['Forms-Demo']">Forms</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
  </div> `,

  directives: [ROUTER_DIRECTIVES],
  providers: [ProductService, 
              HTTP_PROVIDERS,
              ROUTER_PROVIDERS]
})
@RouteConfig ([
  { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
  { path: '/products', name: 'Products', component: ProductListComponent },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent },
  { path: '/forms', name: 'Forms', component: FormsComponent },
  { path: '/forms-demo', name: 'Forms-Demo', component: DemoFormSku }
])
export class AppComponent {
  pageTitle: string = 'Acme Product Management'
}