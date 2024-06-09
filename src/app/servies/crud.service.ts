import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http: HttpClient

  ) {
  }

  print_data = new BehaviorSubject({})


  // developemt mode 
    base_url = 'https://educatorbox.com/Development/API/'

  // producation mode 
  // base_url = 'https://bihardrivermahasangh.com/Registration/api/'


  login(data: any) {
    return this.http.post(`${this.base_url}/login.php`, data)
  }
  get_user() {
    return this.http.get(`${this.base_url}get_userdata.php`)
  }

  post_user(data: any) {
    return this.http.post(`${this.base_url}user_insert.php`, data)
  }

  put_user(data: any, id: any) {
    return this.http.put(`${this.base_url}user_update.php/${id}`, data)
  }
  
  userDelete( id: any) {
    return this.http.post(`${this.base_url}userDelete.php`,id)
  }

  add_sub_admin(data:any){
    return this.http.post(`${this.base_url}/sub_admin.php`,data)
  }

  get_sub_admin(){
    return this.http.get(`${this.base_url}/get_sub_admin.php`)
  }

  delete_sub_admin(id:any){
    return  this.http.post(`${this.base_url}/sub_admin_delete.php`, id)
  }
  
  send_mail(data:any){
    return this.http.post(`${this.base_url}send_email.php`, data)
  }


}
