import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PropertySearchComponent} from './property-search/property-search.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {PropertyDetailsComponent} from './property-details/property-details.component';
import {PropertyAboutComponent} from './property-details/property-about/property-about.component';
import {PropertyAmenitiesComponent} from './property-details/property-amenities/property-amenities.component';
import {PropertyLocationComponent} from './property-details/property-location/property-location.component';
import {PostPropertyComponent} from './post-property/post-property.component';
import {PostPropertyDetailsComponent} from './post-property/post-property-details/post-property-details.component';
import {PostPropertyLocationComponent} from './post-property/post-property-location/post-property-location.component';
import {PostPropertyRentComponent} from './post-property/post-property-rent/post-property-rent.component';
import {PostPropertyMoreDetailsComponent} from './post-property/post-property-more-details/post-property-more-details.component';
import {PostPropertyPhotosComponent} from './post-property/post-property-photos/post-property-photos.component';
import {PostPropertyFurnishingComponent} from './post-property/post-property-furnishing/post-property-furnishing.component';
import {PostPropertyPricingPlanComponent} from './post-property/post-property-pricing-plan/post-property-pricing-plan.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {MyAccountComponent} from './user-dashboard/my-account/my-account.component';
import {MyPropertiesComponent} from './user-dashboard/my-properties/my-properties.component';
import {ThankYouComponent} from './post-property/thank-you/thank-you.component';

const routes: Routes = [
  {path: 'property-search', component: PropertySearchComponent},
  {path: 'search-result', component: SearchResultComponent},
  {
    path: 'property-details/:id', component: PropertyDetailsComponent, children: [
      {path: '', redirectTo: 'about', pathMatch: 'full'},
      {path: 'about', component: PropertyAboutComponent},
      {path: 'amenities', component: PropertyAmenitiesComponent},
      {path: 'location', component: PropertyLocationComponent}
    ]
  },
  {path: 'post-property', component: PostPropertyComponent},
  {path: 'post-property-details', component: PostPropertyDetailsComponent},
  {path: 'post-property-location', component: PostPropertyLocationComponent},
  {path: 'post-property-rent', component: PostPropertyRentComponent},
  {path: 'post-property-more-details', component: PostPropertyMoreDetailsComponent},
  {path: 'post-property-photos', component: PostPropertyPhotosComponent},
  {path: 'post-property-pricing-plan', component: PostPropertyPricingPlanComponent},
  {path: 'thank-you', component: ThankYouComponent},
  {
    path: 'user-dashboard', component: UserDashboardComponent, children: [
      {path: '', redirectTo: 'my-properties', pathMatch: 'full'},
      {path: 'my-properties', component: MyPropertiesComponent},
      {path: 'my-account', component: MyAccountComponent}
    ]
  },
  {path: '', component: PropertySearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
