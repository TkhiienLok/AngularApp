import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../shared/user.model';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
	// dataSource: DataSource<any>;
	
	// dataSource: any=[];
	
	// dataSource: any =[];
	users:any=[];
	// dataSource:UserDataSource;
	public dataSource = new MatTableDataSource();
	displayedColumns = ["id", "name", "username", "email", "website", "company"]

  constructor(public userService: UserService) { }
  

  ngOnInit() {
	// this.dataSource = new UserDataSource(this.userService);
	// this.users = this.dataSource.connect();
	// console.log(this.users);
	this._getElementData();

}
private _getElementData(): void {
	this.userService.getUsersList().subscribe(res => {
	  this.dataSource.data = res;
	});
  }
}

// export class UserDataSource extends DataSource<any> {
// 	constructor(private userService: UserService){
// 		super();
// 	}
// 	connect(): Observable<User[]>{
// 		return this.userService.getUsersList();
// 	}
// 	disconnect() {}
// }
