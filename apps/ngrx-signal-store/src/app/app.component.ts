import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TodoStore } from './store/todo.store';
import { JsonPipe } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';

import { MatProgressSpinner } from '@angular/material/progress-spinner';
@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    JsonPipe,
    TodoListComponent,
    MatProgressSpinner,
  ],
  selector: 'angular-signal-store-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ngrx-signal-store';

  store = inject(TodoStore);

  ngOnInit(): void {
    this.loadTodos().then(() => console.log('Todos loaded'));
  }

  async loadTodos() {
    await this.store.loadAll();
  }
}
