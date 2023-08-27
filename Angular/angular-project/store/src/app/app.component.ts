import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  template: `
  <app-header [cart]="cart"></app-header>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(private cartSerice: CartService) {
    this.cartSerice.cart.subscribe((_cart) => {
      this.cart = _cart
    })
  }

  cart: Cart = { items: [] }
}
