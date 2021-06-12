import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormComponent} from '../common/form/form.component';
import {Store} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-property',
  templateUrl: './post-property.component.html',
  styleUrls: ['./post-property.component.css']
})
export class PostPropertyComponent extends FormComponent implements OnInit {


  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router, protected el: ElementRef) {
    super(store);
  }

  initFormFields(): void {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern('[A-Za-z,.\' ]*')]]
    });
  }

  navigateNextPageOnSuccess(): void {
    this.router.navigateByUrl('/post-property-details');
  }

}
