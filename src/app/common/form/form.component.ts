import {Component, OnInit} from '@angular/core';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {FormGroup} from '@angular/forms';
import {PS_CONSTANTS} from '../constants/psconstants';
import {Property} from '../../model/property';
import {setCurrentProperty} from '../../state/property/actions/property.state.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import {getCurrentProperty} from '../../state/property/property.reducer';
import {PropertyStateActions} from '../../state/property/actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export abstract class FormComponent implements OnInit {
  property: Property;
  readonly CONSTANTS = PS_CONSTANTS;
  dropdownList = [];
  dropdownSettings: IDropdownSettings = {};
  public form: FormGroup;

  protected constructor(protected store: Store<AppState>) {
    this.dropdownList = [
      {item_id: 1, item_text: '1 BHK'},
      {item_id: 2, item_text: '2 BHK'},
      {item_id: 3, item_text: '3 BHK'},
      {item_id: 4, item_text: '4 BHK'},
      {item_id: 5, item_text: '4+ BHK'}
    ];
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
    this.initFormFields();
    // TODO: unscribe
    this.store.select(getCurrentProperty).subscribe(
      property => {
        if (property) {
          this.property = property;
          this.displayProperty(property);
        }
      }
    );
  }

  initFormFields(): void {
  }

  displayProperty(property: Property): void {
    if (property) {
      this.form.reset();
      this.form.patchValue(property);
    }
  }

  onSave(originalProperty: Property): void {
    if (this.form.valid) {
      if (this.form.dirty) {
        const property: Property = {...originalProperty, ...this.form.value};
        this.store.dispatch(PropertyStateActions.setCurrentProperty({property}));
      }
      this.navigateNextPageOnSuccess();

    }
  }

  abstract navigateNextPageOnSuccess(): void;

}
