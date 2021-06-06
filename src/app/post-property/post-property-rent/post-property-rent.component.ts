import {Component, ElementRef, OnInit} from '@angular/core';
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

  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router, protected el: ElementRef) {
    super(store);
  }

  initFormFields(): void {
    this.form = this.fb.group({
      monthlyRent: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      securityAmount: ['', [Validators.required]],
      maintenanceCharges: ['', [Validators.required]],

    });
  }

  navigateNextPageOnSuccess(): void {
    this.router.navigateByUrl('/post-property-more-details');
  }
}
