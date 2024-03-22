import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../../model/todo.model';
import {
  MatFormFieldModule,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectionList, MatListOption } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'todo-list',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSelectionList,
    MatLabel,
    MatIcon,
    MatSuffix,
    MatListOption,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  todoService = inject(TodoService);
  todo$: Observable<Todo[]>;

  constructor() {
    // TODO: service to be replaced with ngrx store
    // for now using service to fetch data
    this.todo$ = this.todoService.getTodos();
    console.log('constructor: ', this.todo$);
  }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe((todos) => {
      console.log('Todos loaded:', todos);
    });
  }
}
