import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  private todos: number = 0;
  private todosCountObservable: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  addTodo(): void {
    //console.log('todos-count (Service): ' + this.todos)
    this.todos++;
    this.todosCountObservable.next(this.todos);
  }

  getTodosCountObservable(): Observable<number> {
    return this.todosCountObservable.asObservable();
  }
}
