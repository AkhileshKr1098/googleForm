import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UpdateFormComponent } from './update-form/update-form.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { PrintPageComponent } from './print-page/print-page.component';
import { ViewportComponent } from './viewport/viewport.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CustomeDirectiveDirective } from './custome-directive.directive';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from "ngx-ui-loader";



@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    LoginPageComponent,
    AdminHomeComponent,
    UserListComponent,
    UpdateFormComponent,
    PrintPageComponent,
    ViewportComponent,
    HomepageComponent,
    CustomeDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatListModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
