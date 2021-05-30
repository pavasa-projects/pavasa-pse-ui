import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from '@ngrx/store';
import {PropertyActionTypes, setCurrentProperty} from './property.state.actions';
import {Property} from '../../model/property';

export interface PropertyState {
  currentProperty: Property;
}

export const initialPropertyState: PropertyState = {
  currentProperty: null
};

export const getFeatureCurrentProperty = createFeatureSelector<PropertyState>('property');

export const getCurrentProperty = createSelector(getFeatureCurrentProperty,
  state => state.currentProperty);

export const propertyReducer = createReducer<PropertyState>(
  initialPropertyState,
  on(setCurrentProperty, (state, action): PropertyState => {
    return {
      ...state,
      currentProperty: action.property
    };
  })
);
