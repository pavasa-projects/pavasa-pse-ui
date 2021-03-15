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
  propertyTypeList = [];
  dropdownSettings: IDropdownSettings = {};


  public form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      typeOfProperty: 'Residential',
      bhkType: '',
      propertyTypes: ''
    });

    this.propertyTypeList = [
      {item_id: 'Office space', item_text: 'Office space'},
      {item_id: 'Co-working', item_text: 'Co-working'},
      {item_id: 'Restaurant/Cafe', item_text: 'Restaurant/Cafe'},
      {item_id: 'Shop/Showroom', item_text: 'Shop/Showroom'},
      {item_id: 'Industrial building', item_text: 'Industrial building'},
      {item_id: 'Industrial Shed', item_text: 'Industrial Shed'},
      {item_id: 'Godown/Warehouse', item_text: 'Godown/Warehouse'}
    ];

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
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableCheckAll: false,
      itemsShowLimit: 2,
      allowSearchFilter: false,
      showSelectedItemsAtTop: true
    };
  }

  onItemSelect(item: any): void {
    console.log(item);
  }

  onSelectAll(items: any): void {
    console.log(items);
  }

}
