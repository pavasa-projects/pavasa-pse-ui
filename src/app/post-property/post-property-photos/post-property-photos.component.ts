import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormComponent} from '../../common/form/form.component';

@Component({
  selector: 'app-post-property-photos',
  templateUrl: './post-property-photos.component.html',
  styleUrls: ['./post-property-photos.component.css']
})
export class PostPropertyPhotosComponent  extends FormComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
  }

}
