import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-property-amenities',
  templateUrl: './property-amenities.component.html',
  styleUrls: ['./property-amenities.component.css']
})
export class PropertyAmenitiesComponent implements OnInit {

  amenities = [
    {name: 'Lift', enable: true},
    {name: 'Gym', enable: true},
    {name: 'Garden', enable: true},
    {name: 'Club House', enable: false},
    {name: 'Swimming Pool', enable: true},
    {name: 'Jogging Track', enable: true},
    {name: 'Security', enable: true},
    {name: 'CCTV Camera', enable: true},
    {name: 'Wi-Fi Connectivity', enable: true},
    {name: 'Intercom', enable: true},
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

  constructor() {
  }

  ngOnInit(): void {
  }


}
