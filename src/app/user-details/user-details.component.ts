import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from "../service/user.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../models/app.state';
import * as UserActions from '../store/actions/user.actions';
import { getUserState, getPostsState,selectedUserPosts } from '../store/selectors/selectors';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit, OnDestroy {

  user$:Observable<any>;
  user: any;
  userPosts$:Observable<any>;
  userPosts: any;
  subscription:Subscription;
  id:number;

  constructor(
    public userService: UserService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private store: Store<AppState>
    ) { 
      this.userPosts$ = this.store.select(getPostsState); 
      this.user$ = this.store.select(getUserState); 
  }
   
  onBackButtonClick(): void{
    this.router.navigate(['/users'])
  }
  
  ngOnInit() { 
    this.id = this.actRoute.snapshot.params['id'];

    this.store.dispatch(new UserActions.getUserAction(this.id));
    this.subscription = this.user$.subscribe((state:AppState) => {
      this.user = state;      
    })
    
  this.subscription.unsubscribe();

    this.store.dispatch(new UserActions.loadPostsAction(this.id));
    this.subscription = this.userPosts$.subscribe((state:AppState) => {
      this.userPosts = state;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
 
}
