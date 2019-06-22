import * as userActions from '../actions/user.actions';

import { AppState } from '../../shared/app.state';

export const initialState: AppState = {
  users: [],
  posts:[]
}

export function UserReducer(state = initialState, action: userActions.Actions):AppState {
  switch(action.type) {
    case userActions.LOAD_USERS_SUCCESS: {
      return {... state, users: action.payload };
    }
    case userActions.LOAD_POSTS_SUCCESS: {
        return {... state, posts: action.payload };
      }
    default:
        return state;

  }
}