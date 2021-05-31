import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormComponent} from '../common/form/form.component';
import {Store} from '@ngrx/store';
import {AppState} from '../state/app.state';

@Component({
  selector: 'app-post-property',
  templateUrl: './post-property.component.html',
  styleUrls: ['./post-property.component.css']
})
export class PostPropertyComponent extends FormComponent implements OnInit {


  constructor(private fb: FormBuilder, store: Store<AppState>) {
    super(store);
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
