import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import likesReducer from './likes_reducer';

export const entitiesReducer = combineReducers(
  {
    users: usersReducer,
    likes: likesReducer,
  }
)
