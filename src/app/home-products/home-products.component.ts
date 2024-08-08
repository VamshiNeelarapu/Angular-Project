import { Component } from '@angular/core';
import { ProductapiService } from '../services/productapi.service';
import { HomeapiapiService } from '../services/homeapi.service';
import { CartService } from '../services/cart.service';
import { WishService } from '../services/wish.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css'],
})
export class HomeProductsComponent {
  products1: any = [];

  constructor(
    private productService: HomeapiapiService,
    private cartService: CartService,
    private wishService: WishService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products1 = data;
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
  addToWish(product: any): void {
    this.wishService.addToWish(product);
    alert('Product added to Wishlist');
  }
}
