import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [{
      product: 'https://via.placeholder.com/150',
      name: 'snicker',
      price: 150,
      quantity: 1,
      id: 1,
    }, {
      product: 'https://via.placeholder.com/150',
      name: 'snicker',
      price: 150,
      quantity: 1,
      id: 2,
    }]
  }
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ]

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart
      this.dataSource = this.cart.items;
    })
  }

  constructor(private cartService: CartService, private http: HttpClient) {

  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items)

  }

  onClearCart(): void {
    this.cartService.clearCart()
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item)
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item)
  }
  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item)
  }

  onCheckout(): void {
    this.http.post('http:localhost:4242/checkout', {
      items: this.cart.items
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe('pk_test_51NDVytAcIhU0j62RCntZb2LorGSVb0N0kQw4GyuktHDQbE8iZEDpEw0as5QJgkjI8qEB0aUwy0bznp5tFn3hHyKW009WFHI7LG');
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })
  }
}
