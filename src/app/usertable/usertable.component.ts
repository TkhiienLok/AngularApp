import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../shared/user.model';


@Component({
  selector: 'usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
	dataSource = new UserDataSource(this.userService);
	displayedColumns = ["id", "name", "username", "email", "website", "company"]

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}

export class UserDataSource extends DataSource<any> {
	constructor(private userService: UserService){
		super();
	}
	connect(): Observable<User[]>{
		return this.userService.getUsersList();
	}
	disconnect() {}
}
