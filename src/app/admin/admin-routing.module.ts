import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AddSubAdminComponent } from './add-sub-admin/add-sub-admin.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { JilaMemberComponent } from './jila-member/jila-member.component';
import { ParkhandMemberComponent } from './parkhand-member/parkhand-member.component';
import { RajyMemberComponent } from './rajy-member/rajy-member.component';
import { GenralMemberComponent } from './genral-member/genral-member.component';



const routes: Routes = [

  {path:'', component: HomeComponent, children:[
    {path:'', component: DashboardComponent},
    {path:'subadmin', component: SubAdminComponent  },
    {path:'userlist', component: UserlistComponent  },
    {path:'jilamember', component: JilaMemberComponent},
    {path:'parkhanmember', component:ParkhandMemberComponent},
    {path:'rajymember', component:RajyMemberComponent},
    {path:'genralmember', component: GenralMemberComponent},
    {path:'addsubadmin', component: AddSubAdminComponent  },
    {path:'subadminlist', component: SubAdminComponent  },



  ]},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
