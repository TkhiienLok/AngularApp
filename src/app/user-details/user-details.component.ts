import { Component, OnInit } from '@angular/core';
import { UserService } from "../shared/user.service";
import { ActivatedRoute, Router } from '@angular/router';
import { UserPost, User } from '../shared/user.model';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { error } from '@angular/compiler/src/util';

import { Store, select } from '@ngrx/store';
import { AppState } from '../shared/app.state';
import * as UserActions from '../store/actions/user.actions';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  // postsData = new UserPostsSource(this.userService, this.actRoute);
  // id = this.actRoute.snapshot.params['id'];
  
  // userPosts: any = [];
  // user:any = {};

  user$:Observable<any>;
  user: User[];
  userPosts$:Observable<any>;
  userPosts: UserPost[];



  constructor(
    public userService: UserService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private store: Store<AppState>) { 
      this.userPosts$ = this.store.select('applicationState'); 
  }
   
  onBackButtonClick(): void{
    this.router.navigate(['/users'])
  }
  
  ngOnInit() { 
    //loading user
    let id:string = this.actRoute.snapshot.params['id'];
    this.loadUser(id);
    this.userPosts$.subscribe((state:AppState) => {
      this.userPosts = state.posts;
    });

    
    // this.userService.getUser(id).subscribe((data:{}) =>{
    //   this.user = data;
    // });
    // this.loadUser(id);   
      
  }
//loading posts
  loadUser(id) {

    this.store.dispatch(new UserActions.loadPostsAction());
    // return this.userService.loadPosts(id).subscribe(
    //     (data: {}) => this.userPosts = data,
    //     (error)=>{
    //       console.log(error);
    //     }
    //     )
    }

  // Update employee data
}

// export class UserPostsSource extends DataSource<any> {
//   id = this.actRoute.snapshot.params['id'];
//   constructor(private userService: UserService,
//               public actRoute: ActivatedRoute,){
//     super();
//   }
//   connect(): Observable<UserPost[]>{
//     return this.userService.loadPosts(this.id);
//   }
//   disconnect() {}
// }