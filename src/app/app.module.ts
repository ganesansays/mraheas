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
import { EducationDepartmentComponent } from './components/education-department/education-department.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { EducationDepartmentAssessmentComponent } from './components/education-department-assessment/education-department-assessment.component';
import { NgChartsModule } from 'ng2-charts';
import { DistrictWiseBarChartComponent } from './charts/district-wise-bar-chart/district-wise-bar-chart.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    InstituteAdminComponent,
    HomePageComponent,
    EducationDepartmentComponent,
    EducationDepartmentAssessmentComponent,
    DistrictWiseBarChartComponent,
    LoginComponent
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
      { path: 'instituteAdmin', component: InstituteAdminComponent, canActivate : [AuthGuardService] },
      { path: 'educationDepartment', component: EducationDepartmentComponent, canActivate : [AuthGuardService] },
      { path: 'educationDepartmentAssessment', component: EducationDepartmentAssessmentComponent, canActivate : [AuthGuardService] },
      { path: 'login', component: LoginComponent },
    ], { useHash: true }),
    NgChartsModule
  ],
  providers: [AuthGuardService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent,]
})
export class AppModule { }
