import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiUrl = "http://localhost:3000/cartItems";
  private cartItems: any = [];
  private cartItemsSubject = new BehaviorSubject<any>(this.cartItems);
  constructor(private http: HttpClient) { }

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }



  addToCart(product: any) {
    const index = this.cartItems.indexOf(product);
    if (index == -1){
      product.quantity = 1;
      this.cartItems.push(product);
      this.cartItemsSubject.next(this.cartItems);
      let data = JSON.stringify(product);
      this.http.post(this.apiUrl, data).subscribe((response) => {
        console.log(response);
      })
    }
  }

  removeFromCart(product: any) {
    const index = this.cartItems.indexOf(product);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.cartItemsSubject.next(this.cartItems);
      this.http.delete(`${this.apiUrl}/${product.id}`).subscribe((response) => {
        console.log(response);
      })
    }
  }
}

