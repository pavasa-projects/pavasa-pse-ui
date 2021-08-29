import {Component, OnInit, ViewChild} from '@angular/core';
import {} from 'google.maps';
import {ActivatedRoute} from '@angular/router';
import {Property} from '../../model/property';


@Component({
  selector: 'app-property-location',
  templateUrl: './property-location.component.html',
  styleUrls: ['./property-location.component.css']
})
export class PropertyLocationComponent implements OnInit {

  @ViewChild('gmap', {static: true}) gmapElements: any;

  map: google.maps.Map;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const property: Property = this.route.parent.snapshot.data.property;
    const propLtdLng = new google.maps.LatLng(property.lat, property.lng);
    const mapProps = {
      center: propLtdLng,
      zoom: 16,
      disableDefaultUI: false
    };
    this.map = new google.maps.Map(this.gmapElements.nativeElement, mapProps);

    const marker = new google.maps.Marker({
      position: propLtdLng
    });

    marker.setMap(this.map);
  }

}
