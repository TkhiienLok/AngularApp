import { Component, OnInit } from '@angular/core';
import { UserService } from "../shared/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UserlistComponent implements OnInit {

  User: any = [];
  Post: any = [];

  constructor(
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  // Get employees list
  loadUsers() {
    return this.userService.getUsersList().subscribe((data: {}) => {
      this.User = data;
    })
    
  }

  // loadPosts(id){
  //   // this.router.navigateByUrl('/user-details/'+id);
  //   return this.userService.getUser(id).subscribe((data: {}) => {
  //     this.Post = data;
  //   })
  // }

//  loadUser(id) {
    
//       return this.userService.getUser(id).subscribe((data) => {
//         this.router.navigate(['/user-details/:'+id]);

//       })
    
//   }  

}