import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionsReducer from './session_reducer';

export const rootReducer = combineReducers(
  {
    session: sessionsReducer,
    errors: errorsReducer,
  }
)
