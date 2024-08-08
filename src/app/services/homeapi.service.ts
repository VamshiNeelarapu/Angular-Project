import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeapiapiService {
  apiUrl = 'http://localhost:3000/products1';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
