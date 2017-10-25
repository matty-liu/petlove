import { combineReducers } from 'redux';
import { errorsReducer } from './errors_reducer';
import sessionReducer from './session_reducer';

export const rootReducer = combineReducers(
  {
    session: sessionReducer,
    errors: errorsReducer,
  }
)
