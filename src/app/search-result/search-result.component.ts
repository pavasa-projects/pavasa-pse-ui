import {Component, OnInit} from '@angular/core';
import {FormComponent} from '../common/form/form.component';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../state/app.state';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent extends FormComponent implements OnInit {

  constructor(private fb: FormBuilder, store: Store<AppState>) {
    super(store);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      typeOfProperty: 'Residential',
      bhkType: '',
      propertyTypes: ''
    });
  }

  onItemSelect(item: any): void {
    console.log(item);
  }

  onSelectAll(items: any): void {
    console.log(items);
  }

  navigateNextPageOnSuccess(): void {
  }

}
