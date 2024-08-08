import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'e-commerce-angular';
  isLoggedIn!:boolean;
  username:string="";
  constructor(private auth:AuthService){

  }
  ngOnInit(): void {
     
     this.auth.LoggedIn.subscribe((status:boolean)=>{
      this.isLoggedIn=status;
     })
     this.auth.user.subscribe((status:string)=>{
      this.username=status;
     })
     if(window.localStorage.getItem('isLogIn')!==null){
        this.isLoggedIn=true;
        let user=window.localStorage.getItem('username');
        (user!==null) ? this.username=user : this.username='';
     }
  }
}
