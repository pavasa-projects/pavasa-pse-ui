import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {propertyReducer} from '../state/property/property.reducer';
import { ThankYouComponent } from './thank-you/thank-you.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [ThankYouComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature('property', propertyReducer),
        RouterModule
    ]
})
export class PostPropertyModule {
}
