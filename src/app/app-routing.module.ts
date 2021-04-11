import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PropertySearchComponent} from './property-search/property-search.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {PropertyDetailsComponent} from './property-details/property-details.component';
import {PropertyAboutComponent} from './property-details/property-about/property-about.component';
import {PropertyAmenitiesComponent} from './property-details/property-amenities/property-amenities.component';
import {PropertyLocationComponent} from './property-details/property-location/property-location.component';
import {PostPropertyComponent} from './post-property/post-property.component';

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
  {path: '', component: PropertySearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
