import {Component, OnInit, ViewChild} from '@angular/core';
import {} from 'google.maps';


@Component({
  selector: 'app-property-location',
  templateUrl: './property-location.component.html',
  styleUrls: ['./property-location.component.css']
})
export class PropertyLocationComponent implements OnInit {

  @ViewChild('gmap', {static: true}) gmapElements: any;

  map: google.maps.Map;

  constructor() {
  }

  ngOnInit(): void {
    const propLtdLng = new google.maps.LatLng(18.6001439, 73.7629175);
    const mapProps = {
      center: propLtdLng,
      zoom: 15,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.gmapElements.nativeElement, mapProps);

    const marker = new google.maps.Marker({
      position: propLtdLng
    });

    marker.setMap(this.map);
  }

}
