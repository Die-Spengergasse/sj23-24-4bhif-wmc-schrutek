import { Component } from '@angular/core';
import { AccountService } from '../../../data/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public _classroomId: string;

  constructor(private _accountService: AccountService) {
    this._classroomId = _accountService.getClassroomId();
   }
}
