import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../service/data.service';
import {Property} from '../model/property';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  private id: string;
  property: Property;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.property = this.route.snapshot.data.property;
  }

}
