import {Component, OnInit} from '@angular/core';
import {FormComponent} from '../../common/form/form.component';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-post-property-details',
  templateUrl: './post-property-details.component.html',
  styleUrls: ['./post-property-details.component.css']
})
export class PostPropertyDetailsComponent extends FormComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    super();
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
