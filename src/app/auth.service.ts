import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: BehaviorSubject<boolean> =new BehaviorSubject<boolean>(false);
  private username: BehaviorSubject<string> =new BehaviorSubject<string>("");
  constructor() { }
  logIn(username:string){
    this.isLoggedIn.next(true);
    this.username.next(username);
    window.localStorage.setItem('isLogIn','true');
    window.localStorage.setItem('username',`${username}`);
    
  }
  logOut(){
    this.isLoggedIn.next(false);
    this.username.next("");
    window.localStorage.clear();
  }

  get LoggedIn():Observable<boolean>{
    return this.isLoggedIn.asObservable();
  }
  get user(){
    return this.username.asObservable();
  }
  
}
