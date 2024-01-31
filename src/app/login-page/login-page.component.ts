import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../servies/crud.service';

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
    private _crud: CrudService,
    private _router: Router
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
    console.log(this.loginForm.value);

    this._crud.login(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        console.log(res.uid[0]);
        if (res.success == true) {
          if (res.uid[0].deg == 'admin') {
            this._router.navigate(['/admin'])
            localStorage.setItem('loginData', JSON.stringify(res.uid[0]))

          }
          if (res.uid[0].deg == 'user') {
            this._router.navigate(['/user'])
            localStorage.setItem('loginData', JSON.stringify(res.uid[0]))

          }
        }



      }
    )

  }
}
