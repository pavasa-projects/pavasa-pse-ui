import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {propertyReducer} from '../state/property/property.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('property', propertyReducer)
  ]
})
export class PostPropertyModule {
}
