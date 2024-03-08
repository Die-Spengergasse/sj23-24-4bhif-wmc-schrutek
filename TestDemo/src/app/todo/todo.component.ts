import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  public todos: number = 0;

  ngOnInit(): void {
  }

  public addTodo(): void {
    this.todoService.addTodo();
  }

  public getTodos(): void {
    this.todoService
      .getTodosCountObservable()
      .subscribe((data) => {
        this.todos = data;
        console.log('todos-count: ' + data)
    })
  }
}
