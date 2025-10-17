import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
activateAccountBtn = false;
loggedin = false
notLoggedin = false

handleAccount(){
  this.activateAccountBtn = !this.activateAccountBtn;
 
}
ngOnInit(): void {
    if(localStorage.getItem('authToken')){
      this.loggedin = true;
      this.notLoggedin = false;
      console.log(this.loggedin);
      
    } else{
      this.loggedin = false;
      this.notLoggedin = true;
    }
}

}
