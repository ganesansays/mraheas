import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-bank-details',
  templateUrl: './update-bank-details.component.html',
  styleUrls: ['./update-bank-details.component.css']
})
export class UpdateBankDetailsComponent implements OnInit {

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
  emisNumberFormGroup: FormGroup;

  district = new FormControl();
  institution = new FormControl();
  typeOfCollege = new FormControl();
  schoolName = new FormControl();
  mobileNumber = new FormControl();
  graduatingYear = new FormControl();
  emailId = new FormControl();

  selectedDistrict : any;
  selectedInstitution : any;
  selectedTypeOfCollege : any;
  aadharNumberValue: any;

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

  districts: string[] = ['Ariyalur',
  'Karur',
  'Nagappattinam',
  'Perambalur',
  'Pudukkottai',
  'Thanjavur',
  'Tiruchirappalli',
  'Tiruvarur',
  'Dharmapuri',
  'Coimbatore',
  'Erode',
  'Krishnagiri',
  'Namakkal',
  'The Nilgiris',
  'Salem',
  'Tiruppur',
  'Dindigul',
  'Kanyakumari',
  'Madurai',
  'Ramanathapuram',
  'Sivagangai',
  'Theni',
  'Thoothukudi',
  'Tirunelveli',
  'Virudhunagar',
  'Tenkasi',
  'Chennai',
  'Cuddalore',
  'Kanchipuram',
  'Chengalpattu',
  'Tiruvallur',
  'Tiruvannamalai',
  'Vellore',
  'Viluppuram',
  'Kallakurichi',
  'Ranipet',
  'Thirupattur'
];

  typeOfInstitutions: string[] = [
  'Engineering',
  'Arts & Science',
  'Vocational'
  ];

  institutions: string[] = [
  'Anna University of Technology Tiruchirappalli – Ariyalur Campus',
  'District Institute of Education and Training(DIET)',
  'Government Arts College',
  'Government ITI, Ariyalur',
  'Government ITI, Andimadam',
  'Government Polytechnic College'
  ];

  constructor(private _formBuilder: FormBuilder, private router:Router) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [''],
    });
    this.otpFormGroup = this._formBuilder.group({
      secondCtrl: [''],
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: [''],
    });
    this.forthFormGroup = this._formBuilder.group({
      thirdCtrl: [''],
      fifthCtrl: [''],
      forthCtrl: [''],
    });
    this.emisNumberFormGroup = this._formBuilder.group({
      emisNumberCtrl: [''],
      district: [''],
      institution: [''],
      schoolName: [''],
      mobileNumber: [''],
      graduatingYear: [''],
      emailId: ['']
    });

  }

  ngAfterViewInit(){
    this.aadhaarNumber.nativeElement?.focus();
    this.aadhaarNumber.nativeElement?.select();
    document.getElementById('html')?.setAttribute("style", "overflow:scroll!important;");
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
    await this.delay(30);
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
    console.log(this.firstFormGroup.controls['firstCtrl'].value);

    if(this.firstFormGroup.controls['firstCtrl'].value === '123456789012') {
      this.router.navigate(['registeredStudents']);
    } else {
      await this.delay(30).then( () => {
          this.verifyingOtp = false;
          stepper.next();
        }
      );
    }

    
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
    await this.delay(30).then( () => {
      this.savingBankDetails = false;
      stepper.next();
    });
  }

  checkEligibility(stepper: any) {
    
    // if(this.emisNumberFormGroup.valid) {
      console.log('checking eligibility');
      this.eligibleForScholorship = false;
    // await this.delay(3000).then( () => {
        this.eligibleForScholorship = true;
        console.log('stepper next');
        console.log(stepper.selectedIndex);
        stepper.selected.completed = true;
        stepper.selected.editable = false;
        stepper.next();
      // }
    // );  
    // } else {
    //   Object.keys(this.emisNumberFormGroup.controls).forEach(key => {
    //     const controlErrors: any = this.emisNumberFormGroup.get(key)?.errors;
    //     if (controlErrors != null) {
    //       Object.keys(controlErrors).forEach(keyError => {
    //        console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
    //       });
    //     }
    //   });
    // }

    
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
      this.router.navigate(['']);
    },0); 
    
  }

  onChange(event: any) {
    let index = String(event.selectedIndex);
    console.log(index);
    if(index == "3") {
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

  gotoProfileHome() {
    this.router.navigate(['registeredStudents']);
  }
}
