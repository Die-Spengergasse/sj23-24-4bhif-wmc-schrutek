import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from 'src/app/data/services/user.service';

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

  constructor(private httpClient: HttpClient, private userService: UserService) {
    httpClient
      .get('https://jsonplaceholder.typicode.com/usersxxxxx')
      .subscribe((data => { 
        console.log(data); 
      }));
  }

  loadData(): void {
    console.log("loadData()");
    this.userService
      .getUser();
  }
}
