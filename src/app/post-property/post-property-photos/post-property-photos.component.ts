import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormComponent} from '../../common/form/form.component';
import {DataService} from '../../service/data.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-property-photos',
  templateUrl: './post-property-photos.component.html',
  styleUrls: ['./post-property-photos.component.css']
})
export class PostPropertyPhotosComponent extends FormComponent {

  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router,
              protected el: ElementRef) {
    super(store);
  }

  navigateNextPageOnSuccess(): void {
    this.router.navigateByUrl('/post-property-pricing-plan');
  }

}
