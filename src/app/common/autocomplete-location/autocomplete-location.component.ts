import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';

@Component({
  selector: 'app-autocomplete-location',
  templateUrl: './autocomplete-location.component.html',
  styleUrls: ['./autocomplete-location.component.css']
})
export class AutocompleteLocationComponent {
  constructor() {
  }

  @ViewChild('placesRef') placesRef: GooglePlaceDirective;

  options = {
    types: [],
    componentRestrictions: {country: 'IN'}
  };

  public handleAddressChange(address): void {
    console.log(address);
    // Do some stuff
  }


}
