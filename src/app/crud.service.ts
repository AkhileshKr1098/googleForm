import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
  private http:HttpClient
  ) { }

  get_user(){
    return  this.http.get('https://educatorbox.com/Development/API/user_data.php')
  }

}
