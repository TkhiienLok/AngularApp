import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { User } from '../shared/user.model';
import { UserPost } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';
  private serviceUrl2 = 'https://jsonplaceholder.typicode.com/posts?';

  constructor(private http: HttpClient) {}
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  
  getUsersList(): Observable<User[]>{
	  return this.http.get<User[]>(this.serviceUrl);
  }
// // HttpClient API get() method => Fetch employees list
// getUsers(): Observable<User> {
//   return this.http.get<User>(this.serviceUrl)
//   .pipe(
//   retry(1),
//   catchError(this.handleError)
//   )
//   }

    // HttpClient API get() method => Fetch employee
    getUser(id): Observable<UserPost[]> {
      return this.http.get<UserPost[]>(this.serviceUrl2 + 'userId=' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    } 

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
  
}



 
