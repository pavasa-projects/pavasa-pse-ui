import {createAction, props} from '@ngrx/store';
import {Property} from '../../../model/property';

export enum PropertyActionTypes {
  SetCurrentProperty = 'Set current property',
  ClearCurrentProperty = 'Clear current property'
}

export const setCurrentProperty = createAction(
  PropertyActionTypes.SetCurrentProperty,
  props<{ property: Property }>()
);

export const clearCurrentProperty = createAction(
  PropertyActionTypes.ClearCurrentProperty
);
