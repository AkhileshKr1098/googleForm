import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  print_data =  new BehaviorSubject<object>({})


  // developement moed 
  // base_url =  new BehaviorSubject<string>('https://educatorbox.com/Development/API/')
  // imgUrl = new BehaviorSubject<string>('https://educatorbox.com/Development/assets/photo/')
  // signUrl = new BehaviorSubject<string>('https://educatorbox.com/Development/assets/sign/')


  // producation mode
   
  base_url =  new BehaviorSubject<string>('https://bihardrivermahasangh.com/registration/api/')
  imgUrl = new BehaviorSubject<string>('https://bihardrivermahasangh.com/registration/assets/photo/')
  signUrl = new BehaviorSubject<string>('https://bihardrivermahasangh.com/registration/assets/sign/')

}
