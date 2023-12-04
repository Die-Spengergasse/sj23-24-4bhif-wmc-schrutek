import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) 
  { }

  getUser() {
    return this.httpClient
      .get('https://jsonplaceholder.typicode.com/users');
  }
}
