import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';


@Component({
  selector: 'usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit, OnDestroy {
	users: User[];
	public dataSource = new MatTableDataSource();
	public displayedColumns = ["id", "name", "username", "email", "website", "company"];
	subscription: Subscription;
   
  constructor(
	  public userService: UserService,
	) { } 

  ngOnInit() {
	this._getElementData();
	
}

private _getElementData(): void {
	this.subscription = this.userService.getUsersList().subscribe(res => {
	  this.dataSource.data = res;
	  this.users = res;
	  console.log(this.dataSource.data);
	});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}

