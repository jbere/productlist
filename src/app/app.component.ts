import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <nav class='navbar navbar-expanded navbar-light bg-light'>
    <a class= 'navbar-brand'>{{title}}</a>
  <ul class = 'nav nav-pills'>
    <li><a class='nav-link' [routerLink]="['/welcome']">Home</a><li>
    <li><a class='nav-link' [routerLink]="['/products']">Product List</a><li>
  </ul>
</nav>
<div class='container'>
  <router-outlet></router-outlet>
</div>
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProductList';
}
