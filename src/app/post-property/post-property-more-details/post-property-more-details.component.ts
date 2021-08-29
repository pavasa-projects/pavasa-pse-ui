import {Component, ElementRef, OnInit} from '@angular/core';
import {FormComponent} from '../../common/form/form.component';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import {Router} from '@angular/router';
import {DataService} from '../../service/data.service';


@Component({
  selector: 'app-post-property-more-details',
  templateUrl: './post-property-more-details.component.html',
  styleUrls: ['./post-property-more-details.component.css']
})
export class PostPropertyMoreDetailsComponent extends FormComponent implements OnInit {
  dateModel: NgbDateStruct;

  constructor(private fb: FormBuilder, private router: Router,
              private config: NgbDatepickerConfig, store: Store<AppState>,
              protected el: ElementRef, protected dataService: DataService) {
    super(store, dataService);
    const current = new Date();
    config.minDate = {
      year: current.getFullYear(), month:
        current.getMonth() + 1, day: current.getDate()
    };
    config.outsideDays = 'hidden';
  }

  initFormFields(): void {
    this.form = this.fb.group({
      carpetArea: ['', [Validators.required]],
      preferredTenantType: ['', [Validators.required]],
      furnishingStatus: ['', [Validators.required]],
      furnishingDetails: new FormArray([], [Validators.required]),
      amenities: new FormArray([], [Validators.required]),
    });
  }

  navigateNextPageOnSuccess(): void {
    this.router.navigateByUrl('/post-property-photos');
  }

  onCheckboxChange(formArrName, e): void {
    const checkArray: FormArray = this.form.get(formArrName) as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

}
