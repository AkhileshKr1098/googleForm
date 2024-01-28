import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, } from '@angular/material/paginator';
import {MatSort } from '@angular/material/sort';
import {MatTableDataSource,} from '@angular/material/table';
import { Router } from '@angular/router';
import { CrudService } from '../servies/crud.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  displayedColumns: string[] = ['id','designation','name', 'mobile_no','reg_no','photo', 'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
url:string ='https://educatorbox.com/Development/assets/photo/'

  constructor(
    private _crud:CrudService,
    private _routing : Router
  ){}

  ngOnInit() {
    this._crud.get_user().subscribe(
      (res:any)=>{
        console.log(res);
            this.dataSource = new MatTableDataSource(res.data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  applyFilter(data:any){

  }
  edit_block(data:any){
    console.log(data);
    
  }
  delete_block(data:any){

  }

  onPrint(data:any){

    this._crud.print_data.next(data)
  
    this._routing.navigate(['printPage'])
    
  }
}
