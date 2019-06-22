import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../../service/user.service';
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