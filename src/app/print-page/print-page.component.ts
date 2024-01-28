import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../servies/crud.service';

@Component({
  selector: 'app-print-page',
  templateUrl: './print-page.component.html',
  styleUrls: ['./print-page.component.css']
})
export class PrintPageComponent implements OnInit {
  constructor(
    private _crud: CrudService,
    private _router : Router
  ) {
    console.log(this._router.getCurrentNavigation()?.extras);
    
   }



  ngOnInit(): void {

    // this._crud.print_data.subscribe(
    //   (res: any) => {
    //     console.log(res);

    //   }
    // )
  }


}


