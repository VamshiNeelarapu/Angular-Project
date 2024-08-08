import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  apiUrl = 'http://localhost:3000/cartItems';
  private wishItems: any = [];
  private wishItemsSubject = new BehaviorSubject<any>(this.wishItems);
  constructor(private http: HttpClient) {}

  getWishItems() {
    return this.wishItemsSubject.asObservable();
  }

  addToWish(product: any) {
    const index = this.wishItems.indexOf(product);
    if (index == -1) {
      product.quantity = 1;
      this.wishItems.push(product);
      this.wishItemsSubject.next(this.wishItems);
      let data = JSON.stringify(product);
      this.http.post(this.apiUrl, data).subscribe((response) => {
        // console.log(response);
      });
    }
  }

  removeFromWish(product: any) {
    const index = this.wishItems.indexOf(product);
    if (index > -1) {
      this.wishItems.splice(index, 1);
      this.wishItemsSubject.next(this.wishItems);
      this.http.delete(`${this.apiUrl}/${product.id}`).subscribe((response) => {
        // console.log(response);
      });
    }
  }
}
