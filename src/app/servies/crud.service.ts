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
    alert("okk")
   }


  base_url = 'https://educatorbox.com/Development/API/'
  print_data = new BehaviorSubject({})


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

}
