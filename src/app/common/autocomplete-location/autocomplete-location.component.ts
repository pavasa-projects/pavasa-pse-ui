import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';

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

  public handleAddressChange(address: Address): void {
    console.log('Society name ' + address.name); // if this and address 1 is same name then ask user to enter society name manually
    console.log('address 1 ' + address.address_components[0].long_name);
    console.log('formatted address ' + address.formatted_address);
    console.log('Latitude' + address.geometry.location.lat());
    console.log('Longitude ' + address.geometry.location.lng());
  }


}
