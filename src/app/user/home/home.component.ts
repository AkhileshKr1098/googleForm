import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name = 'Admin'
  constructor(
    private _router: Router
  ) {

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
  }
  sidebar() {
    if (this.onMenu == false) {
      this.onMenu = true
    } else {
      this.onMenu = false
    }
  }
}
