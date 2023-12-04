import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'spg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  // get
  // post
  // put
  // patch
  // delete

  public users: any[] = [];
  
  constructor(private httpClient: HttpClient) {
  }

  public listUsers(): void {
    console.log("listUsers()");
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/usersxxxxxxx')
      .pipe(catchError(this.handleError))
      .subscribe((data => { 
        console.log(data); 
        this.users = data as any[];
      })
    )
  }

  private handleError(error: HttpErrorResponse) : Observable<never> {
    if (error.status ===  404) {
      return throwError(() => new Error('test-error (not-found-404!)'));
    } else {
      return throwError(() => new Error('test-error (alles andere)'));
    }
  }
}
