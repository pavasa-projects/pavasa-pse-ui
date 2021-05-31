import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from '@ngrx/store';
import {PropertyActionTypes, setCurrentProperty} from './actions/property.state.actions';
import {Property} from '../../model/property';
import {PropertyStateActions} from './actions';

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
  on(PropertyStateActions.setCurrentProperty, (state, action): PropertyState => {
    return {
      ...state,
      currentProperty: action.property
    };
  })
);
