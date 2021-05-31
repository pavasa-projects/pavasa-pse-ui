import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-property-furnishing',
  templateUrl: './post-property-furnishing.component.html',
  styleUrls: ['./post-property-furnishing.component.css']
})
export class PostPropertyFurnishingComponent implements OnInit {

  /*constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router) {
    super(store);
  }*/

  ngOnInit(): void {
  }

  navigateNextPageOnSuccess(): void {
  }

}
