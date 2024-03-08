import { Injectable } from '@angular/core';
import { LogIn } from '../model/login';
import { getCookie } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  public getUserOrCreate(username: string): string {
    return username;
  }

  public getUsername(): string {
    // let login: LogIn = JSON.parse(sessionStorage.getItem("id-token")!) 
    //   ?? new LogIn("", "");
    let login: LogIn = JSON.parse(getCookie("id-token")!) 
      ?? new LogIn("", "");
      
    return login.username;
  }

  public getClassroomId(): string {
    // let login: LogIn = JSON.parse(sessionStorage.getItem("id-token")!) 
    //   ?? new LogIn("", "");
    let login: LogIn = JSON.parse(getCookie("id-token")!) 
      ?? new LogIn("", "");
    console.log(getCookie("id-token"));

    return login.classroomId;
  }
}
