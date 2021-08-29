import {Component, OnInit} from '@angular/core';
import {Property} from '../../model/property';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-property-amenities',
  templateUrl: './property-amenities.component.html',
  styleUrls: ['./property-amenities.component.css']
})
export class PropertyAmenitiesComponent implements OnInit {

  private property: Property;

  amenities = [
    {name: 'Lift', enable: false},
    {name: 'Gym', enable: false},
    {name: 'Garden', enable: false},
    {name: 'Club House', enable: false},
    {name: 'Swimming Pool', enable: false},
    {name: 'Jogging Track', enable: false},
    {name: 'Security', enable: false},
    {name: 'CCTV Camera', enable: false},
    {name: 'Wi-Fi Connectivity', enable: false},
    {name: 'Intercom', enable: false},
  ];

  furnishings = [
    {name: 'Air conditioner', enable: true},
    {name: 'Gas pipeline', enable: true},
    {name: 'Power Backup', enable: false},
    {name: 'Fridge', enable: true},
    {name: 'Washing Machine', enable: false},
    {name: 'Sofa', enable: true},
    {name: 'Beds', enable: true},
    {name: 'TV', enable: true},
    {name: 'Microwave', enable: true},
    {name: 'Dinning Table', enable: true},
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.property = this.route.parent.snapshot.data.property;
    this.amenities.map(amenity => {
      this.property.amenities.includes(amenity.name) ? amenity.enable = true : amenity.enable = false;
    });
    this.furnishings.map(furnishing => {
      this.property.furnishingDetails.includes(furnishing.name) ? furnishing.enable = true : furnishing.enable = false;
    });
  }


}
