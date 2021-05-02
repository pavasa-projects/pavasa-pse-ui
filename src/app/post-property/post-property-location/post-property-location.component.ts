import {Component, OnInit} from '@angular/core';
import {FormComponent} from '../../common/form/form.component';

@Component({
  selector: 'app-post-property-location',
  templateUrl: './post-property-location.component.html',
  styleUrls: ['./post-property-location.component.css']
})
export class PostPropertyLocationComponent extends FormComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
