import { Component, OnInit } from '@angular/core';
import { UserService } from "../shared/user.service";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UserlistComponent implements OnInit {

  User: any = [];

  constructor(
    public restApi: UserService
  ) { }

  ngOnInit() {
    this.loadUsers()
  }

  // Get employees list
  loadUsers() {
    return this.restApi.getUsersList().subscribe((data: {}) => {
      this.User = data;
    })
  }

  // Delete employee
 loadUser(id) {
    
      this.restApi.getUser(id).subscribe(data => {
        this.loadUsers()
      })
    
  }  

}