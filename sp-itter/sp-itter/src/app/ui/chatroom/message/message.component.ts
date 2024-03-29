import { Component, Input } from '@angular/core';
import { Message } from '../../../data/model/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  @Input()
  public message: Message = null!;

  constructor() { }
}
