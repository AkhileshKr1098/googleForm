import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servies/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit , AfterViewInit {

  all_data :any
  constructor(
    private _http: HttpClient,
    private _crud: CrudService
  ) {


  }


  jilasajsye = 0
  samnye = 0
  Prakhand = 0
  Rajya = 0
  allMember: any = 0
  users: any


  ngOnInit() {

  }
  ngAfterViewInit(): void {
    this._crud.get_user().subscribe(
      (res: any) => {
        console.log(res.data);
        this.allMember =  res.data.length

      const jilaData = res.data.filter((item: any) => item.member.includes('जिला'));
      this.jilasajsye =  jilaData.length
      const rajya = res.data.filter((item: any) => item.member.includes('राज्य'));
      this.Rajya =  rajya.length

      const parkhand = res.data.filter((item: any) => item.member.includes('प्रखण्ड'));
      this.Prakhand =  parkhand.length

      const samany = res.data.filter((item: any) => item.member.includes('सामान्य'));
      this.samnye =  samany.length

        
      }
    )

    
  }

}
