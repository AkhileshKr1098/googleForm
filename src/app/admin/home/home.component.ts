import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name = 'Admin'
  isLogin: any
  login_data: any
  constructor(
    private _router: Router
  ) {
    this.login_data = localStorage.getItem('loginData')
    this.isLogin = JSON.parse(this.login_data)
    console.log(this.isLogin);

    if (!this.isLogin) {
      this._router.navigate(['/login'])
    } else {
      console.log('is login')
    }

  }

  ImgUrl: string = ''
  staffLogin: boolean = true
  onMenu: boolean = true
  onLeadSubMenu: boolean = false


  onProfile() {

  }

  LeadSubMenu() {
    this.onLeadSubMenu = !this.onLeadSubMenu;
  }

  logout() {
    this._router.navigate(['/login'])
    localStorage.removeItem('loginData')
    localStorage.clear()
  }

  sidebar() {
    if (this.onMenu == false) {
      this.onMenu = true
    } else {
      this.onMenu = false
    }
  }
}
