import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Auth} from 'aws-amplify';
import {CognitoUser} from 'amazon-cognito-identity-js';
import {FormWithoutStoreComponent} from './common/form-without-store/form-without-store.component';
import {FormBuilder, Validators} from '@angular/forms';
import {VALIDATION_MSG} from './common/constants/validation-messages';
import {Observable, Subscription, timer} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends FormWithoutStoreComponent {

  static TOTAL_NO_OF_INTERVALS = 10;

  closeResult = '';
  showOTPPage = false;
  showLoginPage = true;
  loggedInUser: CognitoUser;
  isUserLoggedIn = false;
  modalReference: NgbModalRef;


  countDown: Subscription;
  count;
  showCounter = true;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    super();

  }

  initFormFields(): void {
    this.showOTPPage = false;
    this.showLoginPage = true;
    this.count = AppComponent.TOTAL_NO_OF_INTERVALS;

    this.form = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('[6-9][0-9]{9}')]],
      otp: ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
    });

    // to check user is logged in or not
    Auth.currentAuthenticatedUser()
      .then((user: CognitoUser) => {
        this.isUserLoggedIn = true;
        console.log('user id token -->' + user.getSignInUserSession().getIdToken().getJwtToken());
      })
      .catch((err) => this.isUserLoggedIn = false);
  }

  open(content): void {
    this.modalReference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.modalReference.result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.showLoginPage = true;
        this.showOTPPage = false;
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  navigateNextPageOnSuccess(): void {
  }

  getOTP(): void {
    if (this.form.controls.mobileNumber.valid) {
      this.signIn().then(
        async () => {
          this.showLoginPage = false;
          this.showOTPPage = true;
          this.makeCounter();
        }).catch(
        (err) => {
          console.log('error while signing in');
          this.signUpAndSignIn().then(
            () => {
              this.showLoginPage = false;
              this.showOTPPage = true;
              this.makeCounter();
            }
          ).catch(
            (signInErr) => {
              this.showLoginPage = true;
              this.showOTPPage = false;
              this.displayMessage.mobileNumber = VALIDATION_MSG.mobileNumber.servererr;
            }
          );
        }
      );
    }
  }

  resendOTP(): boolean {
    this.getOTP();
    return false;
  }

  makeCounter(): void {
    this.count = AppComponent.TOTAL_NO_OF_INTERVALS;
    this.showCounter = true;
    this.countDown = timer(0, 1000).subscribe(() => this.handleCounter());


    /* timer(0, 1000).pipe(
       take(this.count),
       map(() => --this.count)
     ).subscribe(() => {
       if (this.count === 0) {
         this.showCounter = false;
       }
     });*/
    /*this.counter$.subscribe((counter) => {
      this.counter = counter;
      if (this.counter === 0) {

      }
    });*/


  }

  handleCounter(): number {
    if (this.count <= 0) {
      this.countDown.unsubscribe();
      this.showCounter = false;
    }
    return --this.count;
  }

  async signUpAndSignIn(): Promise<void> {
    const {user} = await Auth.signUp({
      username: '+91' + this.form.controls.mobileNumber.value,
      password: 'dummy@pass',
      attributes: {
        phone_number: '+91' + this.form.controls.mobileNumber.value,
        name: 'new user'
      }
    }).then(
      async () => this.loggedInUser = await Auth.signIn('+91' + this.form.controls.mobileNumber.value)
    );
    console.log('signup completed ' + user);
    console.log('sign in start');

  }


  async signIn(): Promise<void> {
    this.loggedInUser = await Auth.signIn('+91' + this.form.controls.mobileNumber.value);
  }

  closeModal(): void {
    this.showLoginPage = true;
    this.showOTPPage = false;
    this.modalReference.close();
    if (this.countDown) {
      this.countDown.unsubscribe();
    }
  }

  // TODO : show error msg for invalid otp
  async verifyOTP(): Promise<void> {
    if (this.form.controls.otp.valid) {
      Auth.sendCustomChallengeAnswer(this.loggedInUser, this.form.controls.otp.value)
        .then((user) => {
          if (user.getSignInUserSession()) {
            this.ngOnInit();
            this.showLoginPage = true;
            this.showOTPPage = false;
            this.modalReference.close();
          } else {
            this.displayMessage.otp = VALIDATION_MSG.otp.invalid;
          }

        }).catch(
        (err) => {
          console.log('error in verifying otp');
          this.displayMessage.otp = VALIDATION_MSG.otp.servererr;
        }
      );
    }
  }


  signOut(): void {

    Auth.signOut().then(() => this.ngOnInit());
  }
}

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {
  transform(value: any): string {
    const minutes = Math.floor(value / 60);
    return (('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2));
  }
}
