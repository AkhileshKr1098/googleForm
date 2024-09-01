import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';
import { UpdateuserComponent } from '../updateuser/updateuser.component';
import { UpdateFormComponent } from 'src/app/update-form/update-form.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  displayedColumns: string[] = ['id', 'reg_no', 'name', 'father', 'email', 'mobile_no', 'photo', 'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  url: string = ''
  total_datano =0
  constructor(
    private _crud: CrudService,
    private _routing: Router,
    private _shared: SharedService,
    private _dilog: MatDialog

  ) { 

    this._shared.imgUrl.subscribe(
    (res:any)=>{
      this.url =  res
    }
    )
  }

  ngOnInit() {
    this.get_data()
  }


  get_data(){
    this._crud.get_user().subscribe(
      (res: any) => {
        console.log(res);
        
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.total_datano = res.data.length

      },
      (error) => {
        console.log(error);

      }
    )
  }
  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onDelete(data: any) {
    const formdata  = new  FormData()
    formdata.append('id',data )
    this._crud.userDelete(formdata).subscribe(
      (res:any)=>{
        if (res.success == 1) {
          this.get_data()
          alert('Delete Success')
        }
      }
    )
  }

  onPrint(data: any) {

    this._shared.print_data.next(data)
    this._routing.navigate(['printpage'])

  }

  onEdit(data: any) {
    this._dilog.open(UpdateFormComponent,{
      data:data
    })
  }


}
