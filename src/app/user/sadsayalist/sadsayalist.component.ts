import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-sadsayalist',
  templateUrl: './sadsayalist.component.html',
  styleUrls: ['./sadsayalist.component.css']
})
export class SadsayalistComponent implements OnInit {
  displayedColumns: string[] = ['id', 'reg_no','name', 'father',  'email', 'mobile_no', 'photo', 'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  url: string = ''
  login : any
  login_data : any
  constructor(
    private _crud: CrudService,
    private _routing: Router,
    private _shared : SharedService
  ) { 
    this._shared.imgUrl.subscribe(
      (res: any) => {
        this.url = res
      }
    )
  }

  ngOnInit() {
    
    this._crud.get_user().subscribe(
      (res: any) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);

      }
    )

    this.login =  localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)
  }

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onEdit(data: any) {
    console.log(data);

  }

  onDelete(data: any) {

  }

  onPrint(data: any) {

this._shared.print_data.next(data)
    this._routing.navigate(['/printpage'])
  }

}
