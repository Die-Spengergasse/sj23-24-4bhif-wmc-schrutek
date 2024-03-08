import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { TodoService } from '../todo.service';
import { of } from 'rxjs';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoComponent],
      providers: [TodoService]
    })
    .compileComponents();
    
    todoService = TestBed.inject(TodoService);

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(async () => {
    // ...
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get 12 todo', () => {
    // Arrange
    spyOn(todoService, 'getTodosCountObservable').and.callFake(() => {
      return of(12);
    });

    // Act
    component.getTodos();

    // Assert
    expect(component.todos).toBe(3);
  })

  it('Todo`s-Number should contain 3', () => {
    // Arrange
    spyOn(todoService, 'getTodosCountObservable').and.callFake(() => {
      return of(3);
    });

    // Act
    component.getTodos();

    // Assert
    const compiled = fixture.nativeElement as HTMLElement;
    //fixture.detectChanges();
    expect(compiled.querySelector('p')?.textContent).toContain('3');
  })
});
