import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
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
    { value: 'सामान्यअध्यक्ष' },
    { value: 'जिला अध्यक्ष' },
    { value: 'जिला उपाध्यक्ष' },
    { value: 'जिला कोषाध्यक्ष' },
    { value: 'जिला  स्तरीये  सदस्य' },
    { value: 'प्रखंड अध्यक्ष' },
    { value: 'प्रखंड सचिव' },
    { value: 'प्रखंड कोषाध्यक्ष' },
    { value: 'राज्य स्तरीये  सदस्य' },

  ]

  userForm !: FormGroup
  profile_url: any = "";
  profile_img: any;

  sign_url: any = "";
  sign_img: any;
  regno: string = ''
  imgUrl = ''
  sinUrl = ''

  constructor(
    private fb: FormBuilder,
    private _crud: CrudService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _shared : SharedService
  ) { 


  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      member: ['', Validators.required],
      cdate: ['', Validators.required],
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
      pincode: [''],
    })


    console.log(this.data);
    
    this.userForm.patchValue(this.data)


    
  }

  onProfile(file:any){

  }
  onSign(file:any){

  }

  
  OnSubmit(){

  }
}
