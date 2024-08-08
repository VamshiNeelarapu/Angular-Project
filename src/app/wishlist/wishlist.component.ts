import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WishService } from '../services/wish.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  apiUrl = 'http://localhost:3000/cartItems';
  cartItems: any = [];
  totalPrice: any = 0;

  constructor(
    private wishService: WishService,
    private cartService: CartService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.wishService.getWishItems().subscribe((items: any) => {
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
    this.wishService.removeFromWish(product);

    // console.log(this.totalPrice);
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}
