import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
activateAccountBtn = false;
loggedin = false
notLoggedin = false

handleAccount(){
  this.activateAccountBtn = !this.activateAccountBtn;
  this.loggedin = !this.loggedin;

  
}

}
