import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {FormComponent} from '../../common/form/form.component';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AppState} from '../../state/app.state';


@Component({
  selector: 'app-post-property-details',
  templateUrl: './post-property-details.component.html',
  styleUrls: ['./post-property-details.component.css']
})
export class PostPropertyDetailsComponent extends FormComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router,
              protected el: ElementRef) {
    super(store);
  }

  initFormFields(): void {
    this.form = this.fb.group({
      subTypeOfProperty: ['', [Validators.required]],
      noOfBedrooms: ['', [Validators.required]],
      noOfBalconies: ['', [Validators.required]],
      noOfBathrooms: ['', [Validators.required]],
      floorNo: ['', [Validators.required]],
      totalFloors: ['', [Validators.required]],
      noOfCoveredParking: ['', [Validators.required]],
      noOfOpenParking: ['', [Validators.required]]

    });

  }

  navigateNextPageOnSuccess(): void {
    this.router.navigateByUrl('/post-property-location');
  }

  ngOnDestroy(): void {
  }


}
