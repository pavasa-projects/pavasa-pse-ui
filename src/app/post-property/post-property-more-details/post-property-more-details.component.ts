import {Component, OnInit} from '@angular/core';
import {FormComponent} from '../../common/form/form.component';
import {FormBuilder, Validators} from '@angular/forms';
import {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';


@Component({
  selector: 'app-post-property-more-details',
  templateUrl: './post-property-more-details.component.html',
  styleUrls: ['./post-property-more-details.component.css']
})
export class PostPropertyMoreDetailsComponent extends FormComponent implements OnInit {
  dateModel: NgbDateStruct;

  constructor(private fb: FormBuilder, private config: NgbDatepickerConfig, store: Store<AppState>) {
    super(store);
    const current = new Date();
    config.minDate = {
      year: current.getFullYear(), month:
        current.getMonth() + 1, day: current.getDate()
    };
    config.outsideDays = 'hidden';
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      typeOfProperty: ['', [Validators.required]],
      subTypeOfProperty: ['', [Validators.required]],
      bhkType: '',
      propertyTypes: ''
    });
  }

  navigateNextPageOnSuccess(): void {
  }
}
