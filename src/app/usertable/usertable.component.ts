import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user.model';
import { MatTableDataSource } from '@angular/material';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../models/app.state';
import * as userActions from '../store/actions/user.actions';

@Component({
  selector: 'usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit, OnDestroy {

	public dataSource = new MatTableDataSource();
	public displayedColumns = ["id", "name", "username", "email", "website", "company"];

	users$:Observable<any>;
	users: User[];
	subscription: Subscription;
   
  constructor(
	  public userService: UserService,
	  private store: Store<AppState>) { 
		this.users$ = this.store.select('applicationState');
		} 

  ngOnInit() {
	this.loadUsers()
	this.subscription = this.users$.subscribe((state:AppState) => {
		this.users = state.users;
		this.dataSource.data = state.users;
	});
	
  }

  // Get users list
  loadUsers() {
    this.store.dispatch(new userActions.loadUsersAction());
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}

