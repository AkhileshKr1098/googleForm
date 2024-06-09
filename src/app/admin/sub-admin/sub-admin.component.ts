import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { AddSubAdminComponent } from '../add-sub-admin/add-sub-admin.component';

@Component({
  selector: 'app-sub-admin',
  templateUrl: './sub-admin.component.html',
  styleUrls: ['./sub-admin.component.css']
})
export class SubAdminComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'mobile','username', 'password', 'status', 'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  url: string = 'https://educatorbox.com/Development/assets/photo/'
  login : any
  login_data : any
  constructor(
    private _crud: CrudService,
    private _routing: Router,
    private dilog : MatDialog
  ) { }

  ngOnInit() {
   this.get_data()

    this.login =  localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)

  }

  get_data(){
    this._crud.get_sub_admin().subscribe(
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
  }

  applyFilter(data: any) {

  }

  onAdd() {
    this.dilog.open(AddSubAdminComponent)
  }

  onDelete(data: any) {
    const formdata  = new  FormData()
    formdata.append('id',data )
    this._crud.delete_sub_admin(formdata).subscribe(
      (res:any)=>{
        if (res.success == 1) {
          this.get_data()
          alert('Delete Success')
        }
      }
    )
  }

  

}
