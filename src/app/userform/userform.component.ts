import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../servies/crud.service';
import { SharedService } from '../servies/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  districtOptions = [
    { value: 'अररिया', viewValue: 'अररिया' },
    { value: 'अरवल', viewValue: 'अरवल' },
    { value: 'औरंगाबाद', viewValue: 'औरंगाबाद' },
    { value: 'बांका', viewValue: 'बांका' },
    { value: 'बेगूसराय', viewValue: 'बेगूसराय' },
    { value: 'भागलपुर', viewValue: 'भागलपुर' },
    { value: 'भोजपुर', viewValue: 'भोजपुर' },
    { value: 'बक्सर', viewValue: 'बक्सर' },
    { value: 'दरभंगा', viewValue: 'दरभंगा' },
    { value: 'गया', viewValue: 'गया' },
    { value: 'गोपालगंज', viewValue: 'गोपालगंज' },
    { value: 'जमुई', viewValue: 'जमुई' },
    { value: 'जहानाबाद', viewValue: 'जहानाबाद' },
    { value: 'कैमूर ( भभुआ )', viewValue: 'कैमूर ( भभुआ )' },
    { value: 'कटिहार', viewValue: 'कटिहार' },
    { value: 'खगड़िया', viewValue: 'खगड़िया' },
    { value: 'किशनगंज', viewValue: 'किशनगंज' },
    { value: 'लखीसराय', viewValue: 'लखीसराय' },
    { value: 'मधेपुरा', viewValue: 'मधेपुरा' },
    { value: 'मधुबनी', viewValue: 'मधुबनी' },
    { value: 'मुंगेर', viewValue: 'मुंगेर' },
    { value: 'मुजफ्फरपुर', viewValue: 'मुजफ्फरपुर' },
    { value: 'नालंदा', viewValue: 'नालंदा' },
    { value: 'नवादा', viewValue: 'नवादा' },
    { value: 'पश्चिम चम्पारण', viewValue: 'पश्चिम चम्पारण' },
    { value: 'पटना', viewValue: 'पटना' },
    { value: 'पूर्वी चंपारण', viewValue: 'पूर्वी चंपारण' },
    { value: 'पूर्णिया', viewValue: 'पूर्णिया' },
    { value: 'रोहतास', viewValue: 'रोहतास' },
    { value: 'सहरसा', viewValue: 'सहरसा' },
    { value: 'समस्तीपुर', viewValue: 'समस्तीपुर' },
    { value: 'सारण', viewValue: 'सारण' },
    { value: 'शेखपुरा', viewValue: 'शेखपुरा' },
    { value: 'शिवहर', viewValue: 'शिवहर' },
    { value: 'सीतामढी', viewValue: 'सीतामढी' },
    { value: 'सिवान', viewValue: 'सिवान' },
    { value: 'सुपौल', viewValue: 'सुपौल' },
    { value: 'वैशाली', viewValue: 'वैशाली' }
  ];


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
    { value: 'प्रदेश अध्यक्ष'},
    { value: 'प्रदेश उपाध्यक्ष' },
    { value: 'प्रदेश सचिव' },
    { value: 'प्रदेश कोषाध्यक्ष' },

  ]

  userForm !: FormGroup
  profile_url: any = "https://bihardrivermahasangh.com/registration/assets/default_profile.png";
  profile_img: any;

  sign_url: any = "https://bihardrivermahasangh.com/registration/assets/sign.png";
  sign_img: any;
  regno: string = ''
  constructor(
    private fb: FormBuilder,
    private _crud: CrudService,
    private _shared : SharedService,
    private _routing : Router
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      member: ['' ],
      cdate: [new Date().toISOString().slice(0, 10)],
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
    })

  }


  OnSubmit() {
    console.log('error hai');
    
    return
    let reg_no = 0
    this._crud.get_user().subscribe(
      (res: any) => {
        console.log(res);
        if (res.success == 1) {
          reg_no = Number(res.data[0].reg_no)
          this.insertData(1 + reg_no)
        }else{
          this.insertData(1 + reg_no)
        }        
      }
    ),
    (error:any)=>{
      console.log(error);
      console.log('faild');

    }

  }



  insertData(reg: any) {
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
      userdata.append('reg_no', reg)
      userdata.append('photo', this.profile_img)
      userdata.append('sign', this.sign_img)

      this._crud.post_user(userdata).subscribe(
        (res: any) => {
          console.log(res);
          if (res.success == 0) {
            alert('Registration number already exists.')
          }
          if (res.success == 1) {
            this.send_mail(reg)
            this.onPrint(res.data)
          }
        },
        (error) => {
          console.log(error);
          console.log(error.error.message);
           if(error.error.message == 'Mobile number already exists'){
           alert("Mobile number already exists")
           }
          
        }
      )
    }
  }



  onPrint(data: any) {
    this._shared.print_data.next(data)
    this._routing.navigate(['printpage'])
  }
  
  send_mail(reg: any) {
    const fromdata = new FormData()
    fromdata.append('to', this.userForm.get('email')?.value)
    fromdata.append('name', this.userForm.get('name')?.value)
    fromdata.append('reg', `BDM00000000${reg}`)
    fromdata.append('mebpost',this.userForm.get('member')?.value )

    this._crud.send_mail(fromdata).subscribe(
      (res: any) => {
        console.log(res);
        this.userForm.reset()

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
