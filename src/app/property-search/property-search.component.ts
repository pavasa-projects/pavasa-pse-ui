import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {FormComponent} from '../common/form/form.component';
import {Store} from '@ngrx/store';
import {AppState} from '../state/app.state';


@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.css']
})
export class PropertySearchComponent extends FormComponent implements OnInit {

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
