import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AddSubAdminComponent } from './add-sub-admin/add-sub-admin.component';

const routes: Routes = [

  {path:'', component: HomeComponent, children:[
    {path:'', component: DashboardComponent},
    {path:'subadmin', component: SubAdminComponent  },
    {path:'userlist', component: UserlistComponent  },
    {path:'addsubadmin', component: AddSubAdminComponent  },
    {path:'subadminlist', component: SubAdminComponent  },



  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
