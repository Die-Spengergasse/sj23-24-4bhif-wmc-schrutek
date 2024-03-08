import { Component } from '@angular/core';
import { MessageRepositoryService } from '../../../data/services/message-repository.service';
import { AccountService } from '../../../data/services/account.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.css'
})
export class MessageFormComponent {

  public message: string = "";

  constructor(
    private _messageRepositoryService: MessageRepositoryService,
    private _accountService: AccountService) { 
    }

  public setMessage(): void {
    this._messageRepositoryService
    .setMessage(this._accountService.getClassroomId(), this.message)
    .subscribe((data) => {
      // subscribe unnötig, da der erste getMessages-Observer ja immer noch aktiv ist.
    });
    
    this.message = ""; // Eingabefeld leeren
    window.scrollTo(0, document.body.scrollHeight);
  }
}
