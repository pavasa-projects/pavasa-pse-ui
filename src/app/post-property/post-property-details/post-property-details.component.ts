import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormComponent} from '../../common/form/form.component';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AppState} from '../../state/app.state';
import {setCurrentProperty} from '../../state/property/property.state.actions';
import {Property} from '../../model/property';
import {getCurrentProperty} from '../../state/property/property.reducer';

@Component({
  selector: 'app-post-property-details',
  templateUrl: './post-property-details.component.html',
  styleUrls: ['./post-property-details.component.css']
})
export class PostPropertyDetailsComponent extends FormComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router) {
    super();
  }

  property: Property;

  ngOnInit(): void {
    this.form = this.fb.group({
      typeOfProperty: ['', [Validators.required]],
      subTypeOfProperty: ['', [Validators.required]],
      bhkType: '',
      propertyTypes: 'ss'
    });

    // TODO: unscribe
    this.store.select(getCurrentProperty).subscribe(
      property => {
        if (property) {
          console.log('from select  ' + property.subTypeOfProperty);
          this.displayProperty(property);
        }
      }
    );
  }

  displayProperty(property: Property): void {
    if (property) {
      this.form.reset();
      this.form.patchValue({
        subTypeOfProperty: property.subTypeOfProperty,
        typeOfProperty: property.typeOfProperty
      });
    }
  }

  onSave(originalProperty: Property): void {
    if (this.form.valid && this.form.dirty) {

      const property: Property = {...originalProperty, ...this.form.value};
      this.store.dispatch(setCurrentProperty({property}));
      this.router.navigateByUrl('/post-property-location');

    }
  }

  ngOnDestroy(): void {
  }

}
