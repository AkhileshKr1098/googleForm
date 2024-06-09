import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddSubAdminComponent } from './add-sub-admin/add-sub-admin.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { UserlistComponent } from './userlist/userlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { RajyMemberComponent } from './rajy-member/rajy-member.component';
import { JilaMemberComponent } from './jila-member/jila-member.component';
import { ParkhandMemberComponent } from './parkhand-member/parkhand-member.component';
import { GenralMemberComponent } from './genral-member/genral-member.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    AddSubAdminComponent,
    SubAdminComponent,
    UserlistComponent,
    UpdateuserComponent,
    RajyMemberComponent,
    JilaMemberComponent,
    ParkhandMemberComponent,
    GenralMemberComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatDialogModule
  ]
})
export class AdminModule { }
