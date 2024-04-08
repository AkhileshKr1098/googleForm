import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servies/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _http: HttpClient,
    private _crud: CrudService
  ) {
    this._crud.get_user().subscribe(
      (res: any) => {
        this.allMember = res.data.length
        this.users = res.data
      }
    )

  }

  jilasajsye = 0
  samnye = 0
  Prakhand = 0
  Rajya = 0
  allMember: any = 0
  users: any


  ngOnInit() {

    console.log(this.users);
    
  }

}
