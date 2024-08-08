import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private auth: AuthService, private router: Router) {}
  onLogin() {
    this.auth.logIn(this.username);
    this.router.navigateByUrl('');
  }
}
