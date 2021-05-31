import {Component, OnInit} from '@angular/core';
import {FormComponent} from '../../common/form/form.component';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-property-location',
  templateUrl: './post-property-location.component.html',
  styleUrls: ['./post-property-location.component.css']
})
export class PostPropertyLocationComponent extends FormComponent implements OnInit {

  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router) {
    super(store);
  }

  ngOnInit(): void {
  }

  navigateNextPageOnSuccess(): void {
  }

}
