import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserformComponent } from './userform/userform.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'', component:UserformComponent},
  {path:'login', component:LoginPageComponent},
  {path:'home', component:AdminHomeComponent, children:[
    {path:'',component:AdminHomeComponent},
    {path:'userlist', component:UserListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
