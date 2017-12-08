import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';

export const uiReducer = combineReducers(
  {
    modal: modalReducer,
  }
)
