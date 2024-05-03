import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ObservableInput, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public users: any[] = [];

  constructor(httpClient: HttpClient) {
    httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(catchError(this.handleError))
      .subscribe((data) => 
      {
        this.users = data as any[];
        console.log(data);
      });
  }

  private handleError(error: HttpErrorResponse): ObservableInput<any> {
    console.log(error);
    return throwError(()=>new Error(''));
  }
}
