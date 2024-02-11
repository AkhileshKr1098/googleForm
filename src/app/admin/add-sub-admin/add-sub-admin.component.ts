import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';

@Component({
  selector: 'app-add-sub-admin',
  templateUrl: './add-sub-admin.component.html',
  styleUrls: ['./add-sub-admin.component.css']
})
export class AddSubAdminComponent implements OnInit {

  subAdmin !: FormGroup

  constructor(
    private _crud: CrudService,
    private _routing: Router,
    private fb: FormBuilder,
    private dilog: MatDialogRef<AddSubAdminComponent>
  ) {

  }

  ngOnInit(): void {
    this.subAdmin = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
      status: ['', Validators.required],

    })
  }


  OnSubmit() {
    if (!this.subAdmin.valid) {
      alert('Plz fill all the filds ')
      return
    } else {

      const subadmin = new FormData()
      subadmin.append('deg', 'user'),
        subadmin.append('name', this.subAdmin.get('name')?.value)
      subadmin.append('username', this.subAdmin.get('username')?.value)
      subadmin.append('password', this.subAdmin.get('password')?.value)
      subadmin.append('mobile', this.subAdmin.get('mobile')?.value)
      subadmin.append('status', this.subAdmin.get('status')?.value)
      this._crud.add_sub_admin(subadmin).subscribe(
        (res: any) => {
          console.log(res);
          if (res.success == 1) {
            alert("data insert successfully");
            this.subAdmin.reset()
            this.dilog.close()
          }
        },
        (error) => {
          console.log(error);

        }
      )
    }



  }




}
