import { Component, OnInit } from '@angular/core';
import { UserService } from "../shared/user.service";
import { User } from '../shared/user.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../shared/app.state';
import * as userActions from '../store/actions/user.actions';
import { Observable } from 'rxjs'

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UserlistComponent implements OnInit {

  // users$: any = [];
  users$:Observable<any>;
  users: User[];

  constructor(
    // public userService: UserService
    private store: Store<AppState>) { 
    this.users$ = this.store.select('applicationState');
    }

  ngOnInit() {
    this.loadUsers();
    this.users$.subscribe((state:AppState) => this.users = state.users);

  }

  // Get employees list
  loadUsers() {
    // return this.userService.getUsersList().subscribe((data: {}) => {
    //   this.users = data;
    // })
  //  this.store.dispatch({ type: '[User Table] Load Users' });

  this.store.dispatch(new userActions.loadUsersAction());
  }


}