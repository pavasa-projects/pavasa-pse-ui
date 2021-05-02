import {Component, OnInit} from '@angular/core';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  dropdownList = [];
  propertyTypeList = [];
  commercialPropertyTypeList = [];
  residentialPropertyTypeList = ['cc', 'ddd'];
  dropdownSettings: IDropdownSettings = {};
  bedrooms = [];
  balconies = [];
  bathrooms = [];

  public form: FormGroup;


  constructor() {
    this.propertyTypeList = ['Residential', 'Commercial'];
    this.residentialPropertyTypeList = ['cc', 'ddd'];
    this.commercialPropertyTypeList = [
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

    this.bedrooms = ['1', '2', '3', '4', '5', '6', '7', '7+'];

    this.balconies = ['0', '1', '2', '3', '4', '4+'];
    this.bathrooms = ['1', '2', '3', '4', '4+'];
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

  ngOnInit(): void {
  }

}
