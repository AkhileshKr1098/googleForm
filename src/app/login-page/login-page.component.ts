import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  hide = true
  loginForm !: FormGroup
  constructor(
    private FromBuilder: FormBuilder,
    private service: CrudService,
    private Router: Router
  ) {
    localStorage.removeItem
    localStorage.clear()
  }

  ngOnInit(): void {
    this.loginForm = this.FromBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }




  Std_login() {
    
  }
}
