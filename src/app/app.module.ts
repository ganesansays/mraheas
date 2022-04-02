import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentInfoComponent } from './student-info/student-info.component';

import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { InstituteAdminComponent } from './institute-admin/institute-admin.component'
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EductionDepartmentComponent } from './eduction-department/eduction-department.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentInfoComponent,
    InstituteAdminComponent,
    HomePageComponent,
    EductionDepartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'studentRegistration', component: StudentInfoComponent },
      { path: 'instituteAdmin', component: InstituteAdminComponent },
      { path: 'educationDepartment', component: EductionDepartmentComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
