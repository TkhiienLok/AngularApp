import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, EMPTY } from 'rxjs';
import { Action } from '@ngrx/store';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../../shared/user.service';
import * as userActions from '../actions/user.actions';
 
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
  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType('[User Table] Load Posts'),
    mergeMap(() => this.userService.loadPosts(1)
      .pipe(
        map(posts => (new userActions.loadPostsSuccessAction(posts))),
        catchError(() => EMPTY)
      ))
    ));
 
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}