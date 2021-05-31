import {AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, OnInit, ViewChildren} from '@angular/core';
import {FormComponent} from '../../common/form/form.component';
import {FormBuilder, FormControlName, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AppState} from '../../state/app.state';

import {GenericValidator} from '../../common/validators/generic-validator';


@Component({
  selector: 'app-post-property-details',
  templateUrl: './post-property-details.component.html',
  styleUrls: ['./post-property-details.component.css']
})
export class PostPropertyDetailsComponent extends FormComponent implements OnInit, OnDestroy {

  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;



  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router) {
    super(store);
    this.validationMessages = {
      subTypeOfProperty: {
        required: 'Product name is required.',
        minlength: 'Product name must be at least three characters.',
        maxlength: 'Product name cannot exceed 50 characters.'
      },
      noOfBedrooms: {
        required: 'Product code is required.'
      },
      starRating: {
        range: 'Rate the product between 1 (lowest) and 5 (highest).'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  initFormFields(): void {
    this.form = this.fb.group({
      subTypeOfProperty: ['', [Validators.required]],
      noOfBedrooms: '',
      noOfBalconies: '',
      noOfBathrooms: '',
      floorNo: '',
      totalFloors: '',
      noOfCoveredParking: '',
      noOfOpenParking: ''

    });

    // Watch for value changes for validation
    this.form.valueChanges.subscribe(
      () => this.displayMessage = this.genericValidator.processMessages(this.form)
    );

  }


  // Also validate on blur
  // Helpful if the user tabs through required fields
  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }


  navigateNextPageOnSuccess(): void {
    this.router.navigateByUrl('/post-property-location');
  }

  navigateNextPageOnError(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }

  ngOnDestroy(): void {
  }


}
