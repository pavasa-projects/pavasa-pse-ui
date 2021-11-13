import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormComponent} from '../common/form/form.component';
import {Store} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {Auth} from 'aws-amplify';
import {CognitoUser} from 'amazon-cognito-identity-js';

@Component({
  selector: 'app-post-property',
  templateUrl: './post-property.component.html',
  styleUrls: ['./post-property.component.css']
})
export class PostPropertyComponent extends FormComponent implements OnInit {

  @ViewChild('loginComponent') modal: LoginComponent;

  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router, protected el: ElementRef) {
    super(store);
  }

  initFormFields(): void {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern('[A-Za-z,.\' ]*')]]
    });
  }

  navigateNextPageOnSuccess(): void {
    Auth.currentAuthenticatedUser()
      .then((user: CognitoUser) => {
        this.router.navigateByUrl('/post-property-details');
      })
      .catch((err) => {
        this.modal.open();
      });
  }

}
