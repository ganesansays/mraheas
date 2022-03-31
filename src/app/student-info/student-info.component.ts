import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, SelectMultipleControlValueAccessor, Validators} from '@angular/forms';
import {StepperSelectionEvent, STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

/**
 * @title Stepper that displays errors in the steps
 */
 @Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class StudentInfoComponent implements OnInit {

  @ViewChild('secondCtrl') otp: ElementRef;
  @ViewChild('accountNumber') accountNumber: ElementRef;
  @ViewChild('aadhaarNumber') aadhaarNumber: ElementRef;  

  firstFormGroup: FormGroup;
  otpFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  otpSent=false;
  sendingOtp=false;
  timeLeft: number = 0;
  interval: any;
  verifyingOtp=false;
  eligibleForScholorship=false;
  ifscFetching = false;
  bankName = "";
  savingBankDetails = false;

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
      thirdCtrl: ['', Validators.required],
      forthCtrl: ['', Validators.required],
      fifthCtrl: ['', Validators.required],
    });
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
    this.ifscFetching = true;
    this.bankName="";
    await this.delay(3000).then( () => {
      this.ifscFetching = false;
      this.bankName = "State bank of India. Chennai."
      setTimeout(()=>{ // this will make the execution after the above boolean has changed
        this.accountNumber.nativeElement.focus();
        this.accountNumber.nativeElement.select();
      },0); 
      }
    );
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
      this.aadhaarNumber.nativeElement.focus();
      this.aadhaarNumber.nativeElement.select();
    },0); 
    
  }
}