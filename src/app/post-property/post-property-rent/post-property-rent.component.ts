import { Component, OnInit } from '@angular/core';
import {FormComponent} from '../../common/form/form.component';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-post-property-rent',
  templateUrl: './post-property-rent.component.html',
  styleUrls: ['./post-property-rent.component.css']
})
export class PostPropertyRentComponent extends FormComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
  }

}
