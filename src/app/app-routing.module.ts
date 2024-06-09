import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserformComponent } from './userform/userform.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserListComponent } from './user-list/user-list.component';
import { PrintPageComponent } from './print-page/print-page.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '',component: UserformComponent},
  {path:'login',  component: LoginPageComponent, },
  {path:'admin', loadChildren : () => import('../app/admin/admin.module').then((res)=>res.AdminModule)},
  {path:'user', loadChildren : ()=> import('../app/user/user.module').then((res)=>res.UserModule)},
  {path :'printpage', component : PrintPageComponent},
  { path: '**', redirectTo: 'login' }  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
