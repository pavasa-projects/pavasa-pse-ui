import {Component, OnInit} from '@angular/core';
import {FormComponent} from '../common/form/form.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {DataService} from '../service/data.service';
import {Property} from '../model/property';
import {PS_CONSTANTS} from '../common/constants/psconstants';
import {IDropdownSettings} from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  readonly CONSTANTS = PS_CONSTANTS;
  dropdownList = [];
  dropdownSettings: IDropdownSettings = {};
  public form: FormGroup;

  constructor(private fb: FormBuilder, store: Store<AppState>, private dataService: DataService) {
//    super(store);
  }

  properties: Property[];
  errorMsg: string;

  ngOnInit(): void {
    this.form = this.fb.group({
      typeOfProperty: 'Residential',
      bhkType: '',
      minBudget: '',
      maxBudget: '',
      subTypeOfProperty: '',
      furnishingStatus: ''
    });
    this.dataService.getProperties().subscribe(
      listOfProperties => {
        this.properties = listOfProperties;
      },
      error => this.errorMsg = error.error.errorMsg
    );
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
