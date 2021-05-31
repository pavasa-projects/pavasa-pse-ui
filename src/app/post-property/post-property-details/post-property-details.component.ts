import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormComponent} from '../../common/form/form.component';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AppState} from '../../state/app.state';
import {setCurrentProperty} from '../../state/property/actions/property.state.actions';
import {Property} from '../../model/property';
import {getCurrentProperty} from '../../state/property/property.reducer';

@Component({
  selector: 'app-post-property-details',
  templateUrl: './post-property-details.component.html',
  styleUrls: ['./post-property-details.component.css']
})
export class PostPropertyDetailsComponent extends FormComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router) {
    super(store);
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
  }


  navigateNextPageOnSuccess(): void {
    this.router.navigateByUrl('/post-property-location');
  }

  ngOnDestroy(): void {
  }


}
