import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SadsayalistComponent } from './sadsayalist/sadsayalist.component';
import { SadsayaUpdateComponent } from './sadsaya-update/sadsaya-update.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: SadsayalistComponent },
      { path: 'sadsyaupdate', component: SadsayaUpdateComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
