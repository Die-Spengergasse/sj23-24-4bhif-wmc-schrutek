import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, from } from 'rxjs';

import { initializeApp } from 'firebase/app';
import { Firestore, Timestamp, addDoc, collection, getDocs, getFirestore, limit, orderBy, query } from 'firebase/firestore';

import { Message } from '../model/message';
import { environment } from '../../../environment/environment';
import { AccountService } from './account.service';
import { ClassroomRepositoryService } from './classroom-repository.service';

@Injectable({
  providedIn: 'root'
})
export class MessageRepositoryService {

  private _messages: Message[] = [];
  private _messagesObservable: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  
  private _db: Firestore;

  constructor(
    public _classroomRepositoryService: ClassroomRepositoryService,
    public _accountService: AccountService) { 
    this._db = getFirestore(initializeApp(environment.firebase));
  }

  private loadMessages(classroomId: string): void {
    const querySnapshot = getDocs(query(collection(this._db
      , `/classrooms/${classroomId}/messages`)
      , orderBy("timeStamp", "asc")
      , limit(50)));

    this._messages = []; // sonst würde sich die Array-Länge multiplizieren

    querySnapshot.then(((snapshot) => { 
      snapshot.forEach((data) => {
        let message: Message = data.data() as Message;
        const timestamp = message.timeStamp;
        this._messages.push(new Message(data.id, 
          message.body, 
          message.timeStamp,
          message.username, 
          this._accountService.getUsername() == message.username ? true : false));
      })
      this._messagesObservable.next(this._messages);
    })).catch((err) => { });
  }

  public getMessages(classroomId: string): Observable<Message[]> {
    this.loadMessages(classroomId);
    return from(this._messagesObservable);
  }

  public setMessage(classroomId: string, body: string): Observable<Message[]> {
    // TODO: Check classroomId
    const docRef = addDoc(collection(this._db, `/classrooms/${classroomId}/messages`), { //, classroomId, "messages"
      body: body,
      timeStamp: Timestamp.fromDate(new Date()),
      username: this._accountService.getUsername()
    }).then((data) => {
      this._messages.push(new Message(data.id, 
        body, 
        new Date(),
        this._accountService.getUsername(), 
        true));
      this._messagesObservable.next(this._messages);
    }).catch((err) => {
      console.log("Fehler bei addDoc(...)\r\n" + err);
    });
    return from(this._messagesObservable);
  }
}
