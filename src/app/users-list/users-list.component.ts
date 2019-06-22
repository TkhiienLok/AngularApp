import { Component, OnInit, OnDestroy} from '@angular/core';
import { User } from '../models/user.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../models/app.state';
import * as userActions from '../store/actions/user.actions';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UserlistComponent implements OnInit, OnDestroy {

  users$:Observable<any>;
  users: User[];
  subscription:Subscription;

  constructor(
    private store: Store<AppState>) { 
    this.users$ = this.store.select('applicationState');
    }

  ngOnInit() {
    this.loadUsers();
    this.subscription = this.users$.subscribe((state:AppState) => this.users = state.users);

  }

  // Get users list
  loadUsers() {
    this.store.dispatch(new userActions.loadUsersAction());
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}