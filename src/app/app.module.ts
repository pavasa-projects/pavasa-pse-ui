import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeadroomModule} from '@ctrl/ngx-headroom';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {PropertySearchComponent} from './property-search/property-search.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AutocompleteLocationComponent} from './common/autocomplete-location/autocomplete-location.component';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {SearchResultComponent} from './search-result/search-result.component';
import {FormComponent} from './common/form/form.component';
import {PropertyDetailsComponent} from './property-details/property-details.component';
import {PropertyAboutComponent} from './property-details/property-about/property-about.component';
import {PropertyAmenitiesComponent} from './property-details/property-amenities/property-amenities.component';
import {PropertyLocationComponent} from './property-details/property-location/property-location.component';
import {NgxGalleryModule} from 'ngx-gallery-9';

@NgModule({
  declarations: [
    AppComponent,
    PropertySearchComponent,
    AutocompleteLocationComponent,
    SearchResultComponent,
    FormComponent,
    PropertyDetailsComponent,
    PropertyAboutComponent,
    PropertyAmenitiesComponent,
    PropertyLocationComponent
  ],
  imports: [
    BrowserModule,
    HeadroomModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
