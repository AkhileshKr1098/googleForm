import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  userForm !: FormGroup
  profile_url: any = "../../assets/default_profile.png";
  profile_img: any;

  sign_url: any = "../../assets/sign.png";
  sign_img: any;
  constructor(
    private fb: FormBuilder,
    private _crud: CrudService
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      father_name: ['', Validators.required],
      dob: ['', Validators.required],
      blodgroup: ['', Validators.required],
      aadhar_no: ['', Validators.required],
      dl: ['', Validators.required],
      mobile_no: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      village: ['', Validators.required],
      post: ['', Validators.required],
      ps: ['', Validators.required],
      dist: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
    })
  }


  OnSubmit() {
    console.log(this.userForm.value);

    const userdata = new FormData()
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
    userdata.append('reg_no', 'REG202401')
    userdata.append('photo', this.profile_img)
    userdata.append('sign', this.sign_img)

    this._crud.post_user(userdata).subscribe(
      (res: any) => {
        console.log(res);
        if (res.success == 1) {
          alert("data insert successfully");
        }
      },
      (error) => {
        console.log(error);

      }
    )


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
