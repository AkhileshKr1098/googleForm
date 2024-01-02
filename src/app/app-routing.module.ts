import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserformComponent } from './userform/userform.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'', component:UserformComponent},
  {path:'login',component:AdminHomeComponent},
  {path:'userlist', component:UserListComponent},

  {path:'home', component:AdminHomeComponent, children:[
    {path:'', component:LoginPageComponent},
    {path:'userlist', component:UserListComponent},
    {path:'ho', component:UserListComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
