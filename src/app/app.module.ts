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
import { RegisteredStudentsComponent } from './components/registered-students/registered-students.component';
import { UpdateBankDetailsComponent } from './components/update-bank-details/update-bank-details.component';
import { ApprovalMessageComponent } from './components/approval-message/approval-message.component';
import { InstitutionAnalyticsComponent } from './components/institution-analytics/institution-analytics.component';
import { InstituteSchoolingValidationComponent } from './components/institute-schooling-validation/institute-schooling-validation.component';
import { DisburseSnackBarComponent } from './components/disburse-snack-bar/disburse-snack-bar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { StudentDisbursementComponent } from './components/student-disbursement/student-disbursement.component';
import { StudentDocumentsComponent } from './components/student-documents/student-documents.component';
import { EducationDepartmentSchoolingComponent } from './components/education-department-schooling/education-department-schooling.component';
import { EducationDepartmentInspectionComponent } from './components/education-department-inspection/education-department-inspection.component';
import { EducationDepartmentSchoolCredCheckComponent } from './components/education-department-school-cred-check/education-department-school-cred-check.component';
import { SocialWelfareComponent } from './components/social-welfare/social-welfare.component';
import { EducationDepartmentEmisApprovalComponent } from './components/education-department-emis-approval/education-department-emis-approval.component';
import { StudentGrievanceComponent } from './components/student-grievance/student-grievance.component';
import { HodAddressGrievanceComponent } from './components/hod-address-grievance/hod-address-grievance.component';
import { HodDashboardComponent } from './components/hod-dashboard/hod-dashboard.component';
import { ApprovalStudentMessageComponent } from './components/approval-student-message/approval-student-message.component';
import { ResolveMessageComponent } from './components/resolve-message/resolve-message.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    InstituteAdminComponent,
    HomePageComponent,
    EducationDepartmentComponent,
    EducationDepartmentAssessmentComponent,
    DistrictWiseBarChartComponent,
    LoginComponent,
    RegisteredStudentsComponent,
    UpdateBankDetailsComponent,
    ApprovalMessageComponent,
    InstitutionAnalyticsComponent,
    InstituteSchoolingValidationComponent,
    DisburseSnackBarComponent,
    LandingPageComponent,
    StudentProfileComponent,
    StudentDisbursementComponent,
    StudentDocumentsComponent,
    EducationDepartmentSchoolingComponent,
    EducationDepartmentInspectionComponent,
    EducationDepartmentSchoolCredCheckComponent,
    SocialWelfareComponent,
    EducationDepartmentEmisApprovalComponent,
    StudentGrievanceComponent,
    HodAddressGrievanceComponent,
    HodDashboardComponent,
    ApprovalStudentMessageComponent,
    ResolveMessageComponent
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
      { path: '', component: LandingPageComponent },
      { path: 'homePage', component: HomePageComponent },
      { path: 'studentRegistration', component: StudentRegistrationComponent, canActivate : [AuthGuardService] },
      { path: 'updateStudentProfile', component: StudentProfileComponent },
      { path: 'studentDisbursement', component: StudentDisbursementComponent },
      { path: 'studentDocuments', component: StudentDocumentsComponent },
      { path: 'studentGrievance', component: StudentGrievanceComponent },
      { path: 'registeredStudents', component: RegisteredStudentsComponent },
      { path: 'updateBankDetails', component: UpdateBankDetailsComponent },
      { path: 'instituteAdmin', component: InstituteAdminComponent, canActivate : [AuthGuardService] },
      { path: 'instituteAnalytics', component: InstitutionAnalyticsComponent, canActivate : [AuthGuardService] },
      { path: 'instituteValidateSchooling', component: InstituteSchoolingValidationComponent, canActivate : [AuthGuardService] },
      { path: 'disbursement', component: EducationDepartmentComponent, canActivate : [AuthGuardService] },
      { path: 'educationDepartmentSchooling', component: EducationDepartmentSchoolingComponent, canActivate : [AuthGuardService] },
      { path: 'educationDepartmentInspection', component: EducationDepartmentInspectionComponent, canActivate : [AuthGuardService] },
      { path: 'educationDepartmentAssessment', component: EducationDepartmentAssessmentComponent, canActivate : [AuthGuardService] },
      { path: 'educationDepartmentCredCheck', component: EducationDepartmentSchoolCredCheckComponent, canActivate : [AuthGuardService] },
      { path: 'educationDepartmentApproveStudent', component: EducationDepartmentEmisApprovalComponent, canActivate : [AuthGuardService] },
      { path: 'socialWelfare', component: SocialWelfareComponent, canActivate : [AuthGuardService] },
      { path: 'hodAddressGrievance', component: HodAddressGrievanceComponent, canActivate : [AuthGuardService] },
      { path: 'hodDashboard', component: HodDashboardComponent, canActivate : [AuthGuardService] },
      { path: 'login', component: LoginComponent },
    ], { useHash: true }),
    NgChartsModule
  ],
  providers: [AuthGuardService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent,]
})
export class AppModule { }
