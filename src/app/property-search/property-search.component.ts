import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IDropdownSettings} from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.css']
})
export class PropertySearchComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};


  public form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      typeOfProperty: 'Residential',
      bhkType: ''
    });

    this.dropdownList = [
      {item_id: 1, item_text: '1 BHK'},
      {item_id: 2, item_text: '2 BHK'},
      {item_id: 3, item_text: '3 BHK'},
      {item_id: 4, item_text: '4 BHK'},
      {item_id: 5, item_text: '4+ BHK'}
    ];
    /*this.selectedItems = [
      {item_id: 3, item_text: 'Pune'},
      {item_id: 4, item_text: 'Navsari'}
    ];*/
    this.dropdownSettings  = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableCheckAll: false,
      itemsShowLimit: 2,
      allowSearchFilter: false,
      showSelectedItemsAtTop: false
    };
  }

  onItemSelect(item: any): void {
    console.log(item);
  }

  onSelectAll(items: any): void {
    console.log(items);
  }

}
