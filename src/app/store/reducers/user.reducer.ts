import * as userActions from '../actions/user.actions';
import { AppState } from '../../models/app.state';


export const initialState: AppState = {
  selectedUser:null,
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
    case userActions.GET_USER_SUCCESS: {
      return {... state, selectedUser: action.payload };
    }
    default:
        return state;

  }
}