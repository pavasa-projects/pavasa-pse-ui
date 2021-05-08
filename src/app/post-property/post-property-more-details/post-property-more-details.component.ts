import {Component, OnInit} from '@angular/core';
import {FormComponent} from '../../common/form/form.component';
import {FormBuilder, Validators} from '@angular/forms';
import {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { PS_CONSTANTS } from '../../common/constants/psconstants';


@Component({
  selector: 'app-post-property-more-details',
  templateUrl: './post-property-more-details.component.html',
  styleUrls: ['./post-property-more-details.component.css']
})
export class PostPropertyMoreDetailsComponent extends FormComponent implements OnInit {
  dateModel: NgbDateStruct;
  readonly CONSTANTS = PS_CONSTANTS;

  constructor(private fb: FormBuilder, private config: NgbDatepickerConfig) {
    super();
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
}
