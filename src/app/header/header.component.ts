import { ChangeDetectorRef } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navbarOpen = false;

  @Input() isLoggedIn: any;
  @Input() username: any;

  logout() {
    this.auth.logOut();
    this.router.navigateByUrl('login');
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  cartItems: any = [];
  wishList: any = [];

  constructor(
    private cartService: CartService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items: any) => {
      this.cartItems = items;
      this.wishList = items;
    });
  }
}
