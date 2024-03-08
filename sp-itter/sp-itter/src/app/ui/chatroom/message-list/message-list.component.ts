import { Component, Input, OnInit } from '@angular/core';
import { MessageRepositoryService } from '../../../data/services/message-repository.service';
import { Message } from '../../../data/model/message';
import { AccountService } from '../../../data/services/account.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit  {

  public _messages: Message[];

  @Input()
  public classroomId: string = "";

  constructor(
    private _messageRepositoryService: MessageRepositoryService,
    private _accountService: AccountService) { 
      this._messages = []; 
    }

  ngOnInit(): void {
    this.refreshMessages();
  }

  private refreshMessages(): void {
    this.getMessages();
    setTimeout(() => {
      this.refreshMessages();
    }, 1000);
  }

  public getMessages(): void {
    this._messageRepositoryService.getMessages(this.classroomId)
    .subscribe((messages) => { 
      console.log(messages.length)
      messages.forEach((s) => {
        //console.log(`message-list-getMessages(): ${s.id} -- ${s.body} (${s.timeStamp})`); 
      });
      this._messages = messages;
    })
  }
}
