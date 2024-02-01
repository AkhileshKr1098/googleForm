import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../servies/crud.service';
import { SharedService } from '../servies/shared.service';

@Component({
  selector: 'app-print-page',
  templateUrl: './print-page.component.html',
  styleUrls: ['./print-page.component.css']
})
export class PrintPageComponent implements OnInit {
  print_data :any
  imgUrl : string = ''
  signUrl : string = ''
  constructor(
    private _crud: CrudService,
    private _router : Router,
    private _shared : SharedService
  ) {
    console.log(this._router.getCurrentNavigation()?.extras);
    
   }



  ngOnInit(): void {
    this._shared.print_data.subscribe(
      (res:any)=>{
        console.log(res);
        this.print_data =  res
        
      }
    )

    this._shared.imgUrl.subscribe(
      (res:any)=>{
        console.log(res);
        this.imgUrl =  res
        
      }
    )
    this._shared.signUrl.subscribe(
      (res:any)=>{
        console.log(res);
        this.signUrl =  res
        
      }
    )


      
  }
  print(){
    window.print()
  }


}


