import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-autocomplete-location',
  templateUrl: './autocomplete-location.component.html',
  styleUrls: ['./autocomplete-location.component.css']
})
export class AutocompleteLocationComponent {
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  @Output() setAddress: EventEmitter<Address> = new EventEmitter<Address>();

  constructor() {
  }

  options = {
    types: [],
    componentRestrictions: {country: 'IN'}
  };

  public handleAddressChange(address: Address): void {
    this.setAddress.emit(address);
  }


}
