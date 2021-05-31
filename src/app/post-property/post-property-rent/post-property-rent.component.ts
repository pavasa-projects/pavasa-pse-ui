import {Component, OnInit} from '@angular/core';
import {FormComponent} from '../../common/form/form.component';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-property-rent',
  templateUrl: './post-property-rent.component.html',
  styleUrls: ['./post-property-rent.component.css']
})
export class PostPropertyRentComponent extends FormComponent implements OnInit {

  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router) {
    super(store);
  }

  initFormFields(): void {
    this.form = this.fb.group({
      monthlyRent: '',
      securityAmount: '',
      maintenanceCharges: '',

    });
  }

  navigateNextPageOnSuccess(): void {
    this.router.navigateByUrl('/post-property-more-details');
  }
}
