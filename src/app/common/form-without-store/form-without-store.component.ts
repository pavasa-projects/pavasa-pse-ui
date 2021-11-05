import {Component, OnInit} from '@angular/core';
import {Property} from '../../model/property';
import {PS_CONSTANTS} from '../constants/psconstants';
import {FormGroup} from '@angular/forms';
import {GenericValidator} from '../validators/generic-validator';
import {VALIDATION_MSG} from '../constants/validation-messages';

@Component({
  selector: 'app-form-without-store',
  templateUrl: './form-without-store.component.html',
  styleUrls: ['./form-without-store.component.css']
})
export abstract class FormWithoutStoreComponent implements OnInit {

  readonly CONSTANTS = PS_CONSTANTS;
  public form: FormGroup;
  public errorMsg: string;

  // for validation messages
  public displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;

  protected constructor() {
    this.genericValidator = new GenericValidator(VALIDATION_MSG);
  }

  ngOnInit(): void {
    this.initFormFields();
    // Watch for value changes for validation
    this.form.valueChanges.subscribe(
      () => this.displayMessage = this.genericValidator.processMessages(this.form)
    );
  }

  // TODO : check use of this
  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }

  initFormFields(): void {
  }

  onSave(originalProperty: Property): void {
    if (this.form.valid) {
      this.navigateNextPageOnSuccess();
    } else {
      this.form.markAllAsTouched();
      this.displayMessage = this.genericValidator.processMessages(this.form);
      this.processOnValidationError();
    }

  }

  protected setCustomPropertyInStore(property: Property): void {
  }


  private displayProperty(property: Property): void {
    if (property) {
      this.form.reset();
      this.form.patchValue(property);
    }
  }

  processOnValidationError(): void {
  }

  abstract navigateNextPageOnSuccess(): void;

}
