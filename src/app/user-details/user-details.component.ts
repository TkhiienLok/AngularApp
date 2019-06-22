import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from "../shared/user.service";
import { ActivatedRoute, Router } from '@angular/router';
import { UserPost, User } from '../shared/user.model';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../shared/app.state';
import * as UserActions from '../store/actions/user.actions';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit, OnDestroy {

  user$:Observable<any>;
  user: User[];
  userPosts$:Observable<any>;
  userPosts: UserPost[];
  subscription:Subscription;

  constructor(
    public userService: UserService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private store: Store<AppState>
    ) { 
      this.userPosts$ = this.store.select('applicationState'); 
  }
   
  onBackButtonClick(): void{
    this.router.navigate(['/users'])
  }
  
  ngOnInit() { 
    let id:string = this.actRoute.snapshot.params['id'];
    this.loadUser(id);  //loading user 
    this.subscription = this.userPosts$.subscribe((state:AppState) => {
      this.userPosts = state.posts; //loading user posts
    });
      
  }
//loading posts
  loadUser(id) {
    this.store.dispatch(new UserActions.loadPostsAction());
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

 
}
