import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';
import { UserPost } from '../../models/user.model';

export const GET_USER = '[User Page] Load User';
export const GET_USER_SUCCESS = '[User Page] Load User Success';
export const LOAD_USERS = '[User Table] Load Users';
export const LOAD_USERS_SUCCESS = '[User Table] Load Users Success';
export const LOAD_POSTS = '[User Table] Load Posts';
export const LOAD_POSTS_SUCCESS = '[User Table] Load Posts Success';

export class getUserAction implements Action {
  readonly type = GET_USER;
  constructor(public payload: number){}
}

export class getUserSuccessAction implements Action {
  readonly type = GET_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class loadUsersAction implements Action {
  readonly type = LOAD_USERS;
}

export class loadUsersSuccessAction implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}


export class loadPostsAction implements Action {
    readonly type = LOAD_POSTS;
    constructor(public payload: number){}
  }
  
  export class loadPostsSuccessAction implements Action {
    readonly type = LOAD_POSTS_SUCCESS;
    constructor(public payload: UserPost[]) {}
  }

  export type Actions =
  loadUsersAction |
  loadUsersSuccessAction |
  loadPostsAction |
  loadPostsSuccessAction |
  getUserAction |
  getUserSuccessAction
