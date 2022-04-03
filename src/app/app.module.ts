import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';

import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { InstituteAdminComponent } from './components/institute-admin/institute-admin.component'
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EductionDepartmentComponent } from './components/eduction-department/eduction-department.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { EducationDepartmentComponent } from './components/education-department/education-department.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    InstituteAdminComponent,
    HomePageComponent,
    EductionDepartmentComponent,
    EducationDepartmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'studentRegistration', component: StudentRegistrationComponent },
      { path: 'instituteAdmin', component: InstituteAdminComponent },
      { path: 'educationDepartment', component: EductionDepartmentComponent },
    ], { useHash: true })
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent,]
})
export class AppModule { }
