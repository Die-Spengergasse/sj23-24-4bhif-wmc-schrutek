import { Component } from '@angular/core';
import { AccountService } from '../../../data/services/account.service';
import { Router } from '@angular/router';
import { setCookie } from '../../../data/services/cookie.service';
import { LogIn } from '../../../data/model/login';
import { ClassroomRepositoryService } from '../../../data/services/classroom-repository.service';
import { Classroom } from '../../../data/model/classroom';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public _classrooms: Classroom[] = []; //'uEIyAWd8BkP1GbCVWkQV'.split(' ');
  public _selectedClassroom: Classroom = null!;
  public _username: string = "";

  constructor(
    private _accountService: AccountService, 
    private _classroomRepositoryService: ClassroomRepositoryService,
    private router: Router) {
      this._classrooms = [];

      _classroomRepositoryService
      .getClassrooms()
      .subscribe((data) => { 
        this._classrooms = data;
        if (data[0] !== undefined) {
          this._selectedClassroom = data[0];
          console.log(`_selectedClassroom: ${data[0].id}`);
        }
      })
    }

  public login(c: Classroom): void {
    console.log(`${this._username} - ${c.id}`);

    sessionStorage.setItem("id-token", JSON.stringify(new LogIn(this._username, c.id)));
    setCookie('id-token', JSON.stringify(new LogIn(this._username, c.id)));

    this.router.navigate(["/home"]);
  }

  public onChange(event: any): void {
    let classroom = event as Classroom;
    console.log(`onChange: ${classroom}`);
  }
}
