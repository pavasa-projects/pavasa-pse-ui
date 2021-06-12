import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import {PropertyStateActions} from '../../state/property/actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-property-pricing-plan',
  templateUrl: './post-property-pricing-plan.component.html',
  styleUrls: ['./post-property-pricing-plan.component.css']
})
export class PostPropertyPricingPlanComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSave(): void {
    this.store.dispatch(PropertyStateActions.clearCurrentProperty());
    this.router.navigateByUrl('/thank-you');
  }

}
