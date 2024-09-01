import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  login: any
  login_data: any
  constructor(
    private _router: Router
  ) {

  }
  ngOnInit() {
    this.login = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)


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
    this._router.navigate(['/'])
    localStorage.removeItem('loginData')
  }
  sidebar() {
    if (this.onMenu == false) {
      this.onMenu = true
    } else {
      this.onMenu = false
    }
  }
}
