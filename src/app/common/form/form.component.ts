import {Component, ElementRef, OnInit} from '@angular/core';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {FormGroup} from '@angular/forms';
import {PS_CONSTANTS} from '../constants/psconstants';
import {Property} from '../../model/property';
import {setCurrentProperty} from '../../state/property/actions/property.state.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import {getCurrentProperty} from '../../state/property/property.reducer';
import {PropertyStateActions} from '../../state/property/actions';
import {GenericValidator} from '../validators/generic-validator';
import {VALIDATION_MSG} from '../constants/validation-messages';
import {fromEvent} from 'rxjs';
import {debounceTime, take} from 'rxjs/operators';

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

  // for validation messages
  public displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  protected el: ElementRef;

  protected constructor(protected store: Store<AppState>) {
    this.genericValidator = new GenericValidator(VALIDATION_MSG);
  }

  ngOnInit(): void {
    this.initFormFields();
    // Watch for value changes for validation
    this.form.valueChanges.subscribe(
      () => this.displayMessage = this.genericValidator.processMessages(this.form)
    );
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

  // TODO : check use of this
  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }

  initFormFields(): void {
  }

  onSave(originalProperty: Property): void {
    if (this.form.valid) {
      if (this.form.dirty) {
        const property: Property = {...originalProperty, ...this.form.value};
        this.setCustomPropertyInStore(property);
        this.store.dispatch(PropertyStateActions.setCurrentProperty({property}));
      }
      this.navigateNextPageOnSuccess();

    } else {
      this.form.markAllAsTouched();
      this.displayMessage = this.genericValidator.processMessages(this.form);
      this.processOnValidationError();
      this.scrollToFirstInvalidControl();
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

  private scrollToFirstInvalidControl(): void {
    const firstInvalidControl: HTMLElement = this.el.nativeElement.querySelector(
      'form .ng-invalid'
    );

    window.scroll({
      top: this.getTopOffset(firstInvalidControl),
      left: 0,
      behavior: 'smooth'
    });

    fromEvent(window, 'scroll')
      .pipe(
        debounceTime(100),
        take(1)
      )
      .subscribe(() => firstInvalidControl.focus());
  }

  private getTopOffset(controlEl: HTMLElement): number {
    const labelOffset = 120;
    return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
  }

  abstract navigateNextPageOnSuccess(): void;

}
