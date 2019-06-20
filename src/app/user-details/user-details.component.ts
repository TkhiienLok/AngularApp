import { Component, OnInit } from '@angular/core';
import { UserService } from "../shared/user.service";
import { ActivatedRoute, Router } from '@angular/router';
import { UserPost, User } from '../shared/user.model';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  // postsData = new UserPostsSource(this.userService, this.actRoute);
  // id = this.actRoute.snapshot.params['id'];
  id:string;
  userData: any = {};
  userposts:UserPost[];
  user:User;

  constructor(
    public userService: UserService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }
   
  onBackButtonClick(): void{
    this.router.navigate(['/users'])
  }
  
  ngOnInit() { 
    this.id = this.actRoute.snapshot.params['id'];
    // this.userService.getUser(this.id).subscribe((data: {}) => {
    //   this.userData = data;
    //   this.router.navigate(['/user-details/:id'])
    // })
    // this.loadUser(this.id)
    this.userService.getUser(this.id).subscribe((data: {}) => {
      this.userData = data;
      console.log(Object.keys(data));
      })
  }

  loadUser(id) {
    return this.userService.getUser(id).subscribe((data: {}) => {
    this.userData = data;
    // this.router.navigate(['/user-details'])
    })
    }

  // Update employee data
}

export class UserPostsSource extends DataSource<any> {
  id = this.actRoute.snapshot.params['id'];
  constructor(private userService: UserService,
              public actRoute: ActivatedRoute,){
    super();
  }
  connect(): Observable<UserPost[]>{
    return this.userService.getUser(this.id);
  }
  disconnect() {}
}