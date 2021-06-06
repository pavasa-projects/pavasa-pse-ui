import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormComponent} from '../../common/form/form.component';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import {Router} from '@angular/router';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {Property} from '../../model/property';

@Component({
  selector: 'app-post-property-location',
  templateUrl: './post-property-location.component.html',
  styleUrls: ['./post-property-location.component.css']
})
export class PostPropertyLocationComponent extends FormComponent {
  lat = 0;
  lng: number;
  formattedAddress: string;

  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  options = {
    types: [],
    componentRestrictions: {country: 'IN'}
  };

  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router, protected el: ElementRef) {
    super(store);
  }

  initFormFields(): void {
    this.form = this.fb.group({
      propertyLocation: ['', [Validators.required]],
      societyName: ['', [Validators.required]]
    });
  }

  navigateNextPageOnSuccess(): void {
    this.router.navigateByUrl('/post-property-rent');
  }

  manualAddress(): void {
    this.form.controls.propertyLocation.setValue('');
    this.lat = 0;
    this.lng = 0;
  }

  setCustomPropertyInStore(property: Property): void {
    property.lat = this.lat;
    property.lng = this.lng;
  }

  public handleAddressChange(address: Address): void {
    let societyName = '';
    let formattedAddress = address.formatted_address;
    if (address.name !== address.address_components[0].long_name) {
      societyName = address.name;
      formattedAddress = societyName + ', ' + address.formatted_address;
    }
    this.formattedAddress = formattedAddress;
    this.form.get('propertyLocation').setValue(formattedAddress);
    this.form.get('societyName').setValue(societyName);
    this.form.markAsDirty();
    this.lat = address.geometry.location.lat();
    this.lng = address.geometry.location.lng();
    // console.log('Society name ' + address.name); // if this and address 1 is same name then ask user to enter society name manually
    // console.log('address 1 ' + address.address_components[0].long_name);
    // console.log('formatted address ' + address.formatted_address);
    // console.log('Latitude' + address.geometry.location.lat());
    // console.log('Longitude ' + address.geometry.location.lng());
  }

}
