import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';
import { UpdateFormComponent } from 'src/app/update-form/update-form.component';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  displayedColumns: string[] = ['id', 'reg_no', 'name', 'father', 'email', 'mobile_no', 'photo', 'action'];
  dataSource = new MatTableDataSource();
  allData: any[] = [];  // This will hold all the data
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  url: string = '';
  total_datano = 0;
  constructor(
    private _crud: CrudService,
    private _routing: Router,
    private _shared: SharedService,
    private _dilog: MatDialog
  ) {
    this._shared.imgUrl.subscribe(
      (res: any) => {
        this.url = res;
      }
    );
  }

  ngOnInit() {
    this.get_data();  // Fetch all data when the component initializes
  }

  // Method to fetch all data (not just the current page's data)
  get_data() {
    this._crud.get_user().subscribe(
      (res: any) => {
        console.log(res);
        this.allData = res.data;  // Store all the data here
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.total_datano = res.data.length;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  applyFilter(event: any) {
    console.log(event.target.value);
    let filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(data: any) {
    const formdata = new FormData();
    formdata.append('id', data);
    this._crud.userDelete(formdata).subscribe(
      (res: any) => {
        if (res.success == 1) {
          this.get_data();  // Refresh all data after deletion
          alert('Delete Success');
        }
      }
    );
  }

  onPrint(data: any) {
    this._shared.print_data.next(data);
    this._routing.navigate(['printpage']);
  }

  onEdit(data: any) {
    this._dilog.open(UpdateFormComponent, {
      data: data
    });
  }



  downloadPDF() {
    const doc = new jsPDF();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('Bihar Driver Mahasangh', 105, 15, { align: 'center' });
    doc.setFontSize(14);
    doc.setDrawColor(0, 0, 0);
    doc.line(10, 30, 200, 30);

    // Table Section
    const columns = [
      'Sl No',
      'Name',
      'Father Name',
      'Reg No',
      'Mobile',
      'Email',
      'Aadhar',
    ];

    console.log(this.allData)
    const rows = this.allData.map((row: any, index: number) => [
      index + 1,
      row.name,
      row.father_name,
      `BDM00000${row.reg_no}`,
      row.mobile_no,
      row.email,
      row.aadhar_no,
    ]);

    doc.autoTable({
      head: [columns],
      body: rows,
      startY: 35,
      theme: 'striped',
      styles: { halign: 'left', valign: 'middle', fontSize: 10 },
      headStyles: { fillColor: [0, 51, 102], textColor: [255, 255, 255] },
      alternateRowStyles: { fillColor: [230, 240, 255] },
      margin: { left: 14, right: 14 },
    });
    const fileName = `reportList.pdf`;
    doc.save(fileName);
  }



  downloadExcel() {
    const columns = [
      'Sl No',
      'Name',
      'Father Name',
      'Reg No',
      'Mobile',
      'Email',
      'Aadhar',
      'DL',
      'Create Date',
      'DOB'
    ];

    // Map Rows
    const rows = this.allData.map((row: any, index: number) => [
      index + 1,
      row.name,
      row.father_name,
      `BDM00000${row.reg_no}`,
      row.mobile_no,
      row.email,
      row.aadhar_no,
      row.dl,
      row.cdate,
      row.dob

    ]);

    const headerRows = [
      ['Bihar Driver Mahasangh'],
      [`w`],
      [],
      columns,
    ];

    const finalRows = [...headerRows, ...rows];
    const worksheet = XLSX.utils.aoa_to_sheet(finalRows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Driver List');
    const fileName = `DriverList.xlsx`;
    XLSX.writeFile(workbook, fileName);
  }


}
