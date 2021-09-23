import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormComponent} from './common/form/form.component';
import {Store} from '@ngrx/store';
import {AppState} from './state/app.state';
import {Auth} from 'aws-amplify';
import {CognitoUser} from 'amazon-cognito-identity-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends FormComponent implements OnInit {
  title = 'pavasa-pse-ui';

  closeResult = '';
  showOTPPage = false;
  showLoginPage = true;
  loggedInUser: CognitoUser;
  isUserLoggedIn = false;

  constructor(private modalService: NgbModal, store: Store<AppState>) {
    super(store);
  }

  ngOnInit(): void {
    this.showOTPPage = false;
    this.showLoginPage = true;

    // to check user is logged in or not
    Auth.currentAuthenticatedUser()
      .then(() => this.isUserLoggedIn = true)
      .catch((err) => this.isUserLoggedIn = false);
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
    this.signIn().then(
      async () => {
        this.showLoginPage = false;
        this.showOTPPage = true;
      }).catch(
      (err) => {
        console.log('error while signing in');
        console.error(err, err.stack);
        this.signUpAndSignIn().then(
          () => {
            this.showLoginPage = false;
            this.showOTPPage = true;
          }
        );
      }
    );
  }

  async signUpAndSignIn(): Promise<void> {
    const {user} = await Auth.signUp({
      username: '+9180073640102',
      password: 'dummy@pass',
      attributes: {
        phone_number: '+9180073640102',
        name: 'Finally Rakesh'
      }
    }).then(
      async () => this.loggedInUser = await Auth.signIn('+9180073640102')
    );
    console.log('signup completed ' + user);
    console.log('sign in start');

  }


  async signIn(): Promise<void> {
    this.loggedInUser = await Auth.signIn('+9180073640102');
  }

  async verifyOTP(): Promise<void> {
    Auth.sendCustomChallengeAnswer(this.loggedInUser, '1234')
      .then(() => {
        this.ngOnInit();
        this.showLoginPage = true;
        this.showOTPPage = false;
      }).catch((err) => console.log('error in verifying otp'));
  }


  signOut(): void {
    Auth.signOut().then(() => this.ngOnInit());
  }
}
