import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';
import { UserPost } from '../../models/user.model';

export const LOAD_USERS = '[User Table] Load Users';
export const LOAD_USERS_SUCCESS = '[User Table] Load Users Success';
export const LOAD_POSTS = '[User Table] Load Posts';
export const LOAD_POSTS_SUCCESS = '[User Table] Load Posts Success';

export class loadUsersAction implements Action {
  readonly type = LOAD_USERS;
}

export class loadUsersSuccessAction implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}


export class loadPostsAction implements Action {
    readonly type = LOAD_POSTS;
  }
  
  export class loadPostsSuccessAction implements Action {
    readonly type = LOAD_POSTS_SUCCESS;
    constructor(public payload: UserPost[]) {}
  }

  export type Actions =
  loadUsersAction |
  loadUsersSuccessAction |
  loadPostsAction |
  loadPostsSuccessAction