import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PropertySearchComponent} from './property-search/property-search.component';
import {SearchResultComponent} from './search-result/search-result.component';

const routes: Routes = [
  { path: 'property-search', component: PropertySearchComponent },
  { path: 'search-result', component: SearchResultComponent},
  { path: '', component: PropertySearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
