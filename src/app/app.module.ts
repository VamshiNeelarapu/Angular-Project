import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { TemplateModule } from './template/template.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { SubfooterComponent } from './footer/subfooter/subfooter.component';
import { CopyrightComponent } from './footer/copyright/copyright.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    NotFoundComponent,
    LoginComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    HomeProductsComponent,
    SubfooterComponent,
    CopyrightComponent,
    TestimonialsComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
