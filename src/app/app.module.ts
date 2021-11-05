import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent, FormatTimePipe} from './app.component';
import {HeadroomModule} from '@ctrl/ngx-headroom';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {PropertySearchComponent} from './property-search/property-search.component';
import {NgbDateParserFormatter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import {PostPropertyComponent} from './post-property/post-property.component';
import {LoginComponent} from './login/login.component';
import {PostPropertyDetailsComponent} from './post-property/post-property-details/post-property-details.component';
import {PostPropertyLocationComponent} from './post-property/post-property-location/post-property-location.component';
import {PostPropertyRentComponent} from './post-property/post-property-rent/post-property-rent.component';
import {PostPropertyMoreDetailsComponent} from './post-property/post-property-more-details/post-property-more-details.component';
import {PostPropertyPhotosComponent} from './post-property/post-property-photos/post-property-photos.component';
import {PostPropertyFurnishingComponent} from './post-property/post-property-furnishing/post-property-furnishing.component';
import {NgbDateCustomParserFormatter} from './common/ngb-date-custom-parser-formatter.service';
import {PostPropertyPricingPlanComponent} from './post-property/post-property-pricing-plan/post-property-pricing-plan.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {MyPropertiesComponent} from './user-dashboard/my-properties/my-properties.component';
import {MyAccountComponent} from './user-dashboard/my-account/my-account.component';
import {StoreModule} from '@ngrx/store';
import {propertyReducer} from './state/property/property.reducer';
import {PostPropertyModule} from './post-property/post-property.module';
import {HttpClientModule} from '@angular/common/http';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {FormWithoutStoreComponent} from './common/form-without-store/form-without-store.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertySearchComponent,
    AutocompleteLocationComponent,
    SearchResultComponent,
    PropertyDetailsComponent,
    PropertyAboutComponent,
    PropertyAmenitiesComponent,
    PropertyLocationComponent,
    PostPropertyComponent,
    LoginComponent,
    PostPropertyDetailsComponent,
    PostPropertyLocationComponent,
    PostPropertyRentComponent,
    PostPropertyMoreDetailsComponent,
    PostPropertyPhotosComponent,
    PostPropertyFurnishingComponent,
    PostPropertyPricingPlanComponent,
    UserDashboardComponent,
    MyPropertiesComponent,
    MyAccountComponent,
    FormatTimePipe
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
    NgxGalleryModule,
    PostPropertyModule,
    StoreModule.forRoot({}),
    HttpClientModule,
    AmplifyUIAngularModule
  ],
  providers: [{provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
