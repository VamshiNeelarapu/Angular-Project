import { Component } from '@angular/core';
import { ProductapiService } from '../services/productapi.service';
import { CartService } from '../services/cart.service';
import { WishService } from '../services/wish.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: any = [];

  constructor(
    private productService: ProductapiService,
    private cartService: CartService,
    private wishService: WishService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
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
