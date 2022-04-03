import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, SelectMultipleControlValueAccessor, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { accountNumberValidator } from './accountNumberValidator';

/**
 * @title Stepper that displays errors in the steps
 */
 @Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class StudentRegistrationComponent implements OnInit {

  @ViewChild('secondCtrl') otp: ElementRef;
  @ViewChild('accountNumber') accountNumber: any;
  @ViewChild('reenterAccountNumber') reenterAccountNumber: any;
  @ViewChild('aadhaarNumber') aadhaarNumber: ElementRef;  
  @ViewChild('forthFormDirective') private forthFormDirective: NgForm;
  @ViewChild('ifscCode') private ifscCode: ElementRef;
  
  firstFormGroup: FormGroup;
  otpFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;

  otpSent=false;
  sendingOtp=false;
  timeLeft: number = 0;
  interval: any;
  verifyingOtp=false;
  eligibleForScholorship=false;
  ifscFetching = false;
  bankName = "";
  savingBankDetails = false;
  accountNumberValue = "";
  reenterAccountNumberValue = "";

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.otpFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.forthFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
      fifthCtrl: ['', Validators.required],
      forthCtrl: ['', accountNumberValidator()],
    });

  }

  ngAfterViewInit(){
    this.aadhaarNumber.nativeElement?.focus();
    this.aadhaarNumber.nativeElement?.select();
  }

  private delay(ms: number)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  startTimer() {
    this.timeLeft = 60;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.pauseTimer();
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  async sendOtp() {
    if(this.timeLeft > 0) return;
    this.otpSent = false;
    this.sendingOtp = true;
    await this.delay(3000);
    this.otpSent = true;
    this.startTimer();
    this.sendingOtp = false;
    setTimeout(()=>{ // this will make the execution after the above boolean has changed
      this.otp.nativeElement.focus();
      this.otp.nativeElement.select();
    },0); 
  }

  async verifyOtp(stepper:any) {
    this.verifyingOtp = true;
    this.eligibleForScholorship = false;
    await this.delay(3000).then( () => {
        this.verifyingOtp = false;
        this.eligibleForScholorship = true;
        stepper.next();
      }
    );
  }

  async fetchIfscInfo() {
    if(this.thirdFormGroup.valid) {
      this.ifscFetching = true;
      this.bankName="";
      await this.delay(3000).then( () => {
          this.ifscFetching = false;
          this.bankName = "State bank of India. Chennai."
          setTimeout(()=>{ 
            this.accountNumber.nativeElement.focus();
            this.accountNumber.nativeElement.select();
          },0); 
          console.log("Resetting forth form");
            this.forthFormDirective.resetForm();
            this.forthFormGroup.reset();
            Object.keys(this.forthFormGroup.controls).forEach(key => {
              this.forthFormGroup.get(key)!.setErrors(null) ;
          });
        }
      );
    }
    
  }

  async saveBankDetails(stepper:any) {
    this.savingBankDetails = true;
    await this.delay(3000).then( () => {
      this.savingBankDetails = false;
      stepper.next();
    });
  }

  logout(stepper:any) {
    this.otpSent=false;
    this.sendingOtp=false;
    this.verifyingOtp=false;
    this.eligibleForScholorship=false;
    this.ifscFetching = false;
    this.bankName = "";
    this.savingBankDetails = false;
    this.timeLeft = 0;
    stepper.reset();
    setTimeout(()=>{ // this will make the execution after the above boolean has changed
      this.aadhaarNumber.nativeElement?.focus();
      this.aadhaarNumber.nativeElement?.select();
    },0); 
    
  }

  onChange(event: any) {
    let index = String(event.selectedIndex);
    console.log(index);
    if(index == "2") {
        let targetElem = document.getElementById("ifscCode");
        setTimeout(function waitTargetElem() {
          if (document.body.contains(targetElem)) {
            targetElem?.focus();
          } else {
            setTimeout(waitTargetElem, 200);
          }
        }, 200);
    }
  }
}