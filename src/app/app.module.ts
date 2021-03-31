import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeadroomModule} from '@ctrl/ngx-headroom';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { PropertySearchComponent } from './property-search/property-search.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AutocompleteLocationComponent } from './common/autocomplete-location/autocomplete-location.component';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { SearchResultComponent } from './search-result/search-result.component';
import { FormComponent } from './common/form/form.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertySearchComponent,
    AutocompleteLocationComponent,
    SearchResultComponent,
    FormComponent,
    PropertyDetailsComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
