import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../servies/crud.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  userForm !: FormGroup
  profile_url: any = "https://bihardrivermahasangh.com/registration/assets/default_profile.png";
  profile_img: any;

  sign_url: any = "https://bihardrivermahasangh.com/registration/assets/sign.png";
  sign_img: any;
  regno: string = ''
  base_url: string = 'https://bihardrivermahasangh.com/registration/assets/sign/'


  menber = [
    { value: 'सामान्य सदस्य' },
    { value: 'जिला अध्यक्ष' },
    { value: ' जिला सचिव' },
    { value: 'जिला उपाध्यक्ष' },
    { value: 'जिला कोषाध्यक्ष' },
    { value: 'जिला स्तरीय सदस्य' },
    { value: 'प्रखण्ड अध्यक्ष' },
    { value: 'प्रखण्ड सचिव' },
    { value: 'प्रखण्ड उपाध्यक्ष' },
    { value: 'प्रखण्ड कोषाध्यक्ष' },
    { value: 'प्रखण्ड स्तरीय सदस्य' },
    { value: 'राज्य स्तरीय सदस्य' },
    { value: 'प्रदेश अध्यक्ष' },
    { value: 'प्रदेश उपाध्यक्ष' },
    { value: 'प्रदेश सचिव' },
    { value: 'प्रदेश कोषाध्यक्ष' },

  ]

  constructor(
    private fb: FormBuilder,
    private _crud: CrudService,
    public dialogRef: MatDialogRef<UpdateFormComponent>, // Inject MatDialogRef

    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {

  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      member: [''],
      cdate: [''],
      name: ['', Validators.required],
      father_name: [''],
      dob: [''],
      blodgroup: [''],
      aadhar_no: [''],
      dl: ['', Validators.required],
      mobile_no: ['', Validators.required],
      email: [''],
      address: [''],
      village: [''],
      post: [''],
      ps: [''],
      dist: [''],
      state: [''],
      pincode: [''],
      parkhand: [''],
      id: [''],
    })

    this.userForm.patchValue(this.data)
    console.log(this.data);
    this.sign_url = this.base_url + this.data?.sign
    this.profile_url = 'https://bihardrivermahasangh.com/registration/assets/photo/' + this.data?.photo
  }


  OnSubmit() {
    console.log(this.userForm.value);

    if (!this.userForm.valid) {
      return alert('Plz.  Fill all required fildes')
    } else {
      const userdata = new FormData()
      userdata.append('cdate', this.userForm.get('cdate')?.value)
      userdata.append('member', this.userForm.get('member')?.value)
      userdata.append('name', this.userForm.get('name')?.value)
      userdata.append('father_name', this.userForm.get('father_name')?.value)
      userdata.append('dob', this.userForm.get('dob')?.value)
      userdata.append('aadhar_no', this.userForm.get('aadhar_no')?.value)
      userdata.append('dl', this.userForm.get('dl')?.value)
      userdata.append('mobile_no', this.userForm.get('mobile_no')?.value)
      userdata.append('email', this.userForm.get('email')?.value)
      userdata.append('address', this.userForm.get('address')?.value)
      userdata.append('dist', this.userForm.get('dist')?.value)
      userdata.append('blodgroup', this.userForm.get('blodgroup')?.value)
      userdata.append('village', this.userForm.get('village')?.value)
      userdata.append('post', this.userForm.get('post')?.value)
      userdata.append('ps', this.userForm.get('ps')?.value)
      userdata.append('state', this.userForm.get('state')?.value)
      userdata.append('pincode', this.userForm.get('pincode')?.value)
      userdata.append('parkhand', this.userForm.get('parkhand')?.value)
      userdata.append('reg_no', this.data?.reg_no)
      userdata.append('id', this.data?.id)

      if (this.profile_img) {
        userdata.append('photo', this.profile_img)
      } else {
        userdata.append('photo', this.data?.photo)
      }

      if (this.sign_img) {
        userdata.append('sign', this.sign_img)
      } else {
        userdata.append('sign', this.data?.sign)
      }

      this._crud.put_user(userdata, this.data?.id).subscribe(
        (res: any) => {
          console.log('Update successful:', res);
          if (res.success == 1) {
            alert(res.message)
            this.dialogRef.close();
          }
        },
        (error) => {
          console.error('API error:', error);
        }
      )

    }
  }





  onProfile(files: any) {
    if (files.length === 0) {
      return;
    }
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    let reader = new FileReader();
    this.profile_img = files[0];
    reader.onload = () => {
      this.profile_url = reader.result;
    };

    reader.readAsDataURL(this.profile_img);
  }

  onSign(files: any) {
    if (files.length === 0) {
      return;
    }
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    let reader = new FileReader();
    this.sign_img = files[0];
    reader.onload = () => {
      this.sign_url = reader.result;
      // console.log(this.profile_img)

    };

    reader.readAsDataURL(this.sign_img);
    // this.emp_form.get('profile_img')?.setValue(this.profile_img)
  }

}
