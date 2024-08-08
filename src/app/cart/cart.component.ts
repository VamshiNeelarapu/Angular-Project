import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  apiUrl = 'http://localhost:3000/cartItems';
  cartItems: any = [];
  totalPrice: any = 0;

  constructor(
    private cartService: CartService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items: any) => {
      this.cartItems = items;
      this.totalPrice = items.reduce(
        (sum: any, curr: any) =>
          sum + parseInt(curr.price) * parseInt(curr.quantity),
        0
      );
    });
    // console.log(this.cartItems);
    // console.log(this.totalPrice);
  }

  removeFromCart(product: any): void {
    this.cartService.removeFromCart(product);
    this.totalPrice = this.cartItems.reduce(
      (sum: any, curr: any) =>
        sum + parseInt(curr.price) * parseInt(curr.quantity),
      0
    );
    console.log(this.totalPrice);
  }

  checkout() {
    this.router.navigateByUrl('checkout');
    this.cartItems.length = 0;
  }

  updatePrice(event: any, product: any) {
    const index = this.cartItems.indexOf(product);
    this.cartItems[index].quantity = event.target.valueAsNumber;
    this.totalPrice = this.cartItems.reduce(
      (sum: any, curr: any) =>
        sum + parseInt(curr.price) * parseInt(curr.quantity),
      0
    );
    let data = JSON.stringify(product);
    this.http
      .put(`${this.apiUrl}/${product.id}`, data)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
