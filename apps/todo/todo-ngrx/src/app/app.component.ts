import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
  standalone: true,
  imports: [RouterModule, TodoListComponent],
  selector: 'angular-signal-store-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-ngrx';
}
