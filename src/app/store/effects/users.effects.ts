import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, Effect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { UserService } from '../../service/user.service';
import * as userActions from '../actions/user.actions';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../models/app.state';
import { getPostsState, getUsersState } from '../selectors/selectors';


@Injectable()
export class UserEffects {
 
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType('[User Table] Load Users'),
    mergeMap(() => this.userService.getUsersList()
      .pipe(
        map(users => (new userActions.loadUsersSuccessAction(users))),
        catchError(() => EMPTY)
      ))
    ));

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<userActions.getUserAction>('[User Page] Load User'),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(getUsersState))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new userActions.getUserSuccessAction(selectedUser));
    }),
    catchError(() => EMPTY)
    );

  @Effect()
  getUserPosts$ = this.actions$.pipe(
    ofType<userActions.loadPostsAction>('[User Table] Load Posts'),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(getPostsState))),
    switchMap(([id]) => this.userService.loadPosts(id)),
    switchMap((posts) => of(new userActions.loadPostsSuccessAction(posts))),
    catchError(() => EMPTY)
    );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<AppState>

  ) {}
}