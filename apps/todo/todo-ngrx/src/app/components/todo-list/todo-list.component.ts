import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
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
import { Todo } from '../../model/todo.model';
import { AppState } from '../../+state/todo.state';
import { Store } from '@ngrx/store';
import { selectTodoLoading, selectTodos } from '../../+state/todo.selectors';
import * as TodoActions from '../../+state/todo.actions';

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
export class TodoListComponent {
  todo$: Observable<Todo[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.todo$ = this.store.select(selectTodos);
    this.isLoading$ = this.store.select(selectTodoLoading);
    this.loadTodos;

    // TODO: for debug only
    this.todo$.subscribe((todos) => {
      console.log('constructor todos: ', todos);
    });
  }

  loadTodos() {
    // use store dispatch to load todos
    this.store.dispatch(TodoActions.loadTodos());
  }
}
