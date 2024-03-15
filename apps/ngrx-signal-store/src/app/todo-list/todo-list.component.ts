import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { TodoStore } from '../store/todo.store';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  store = inject(TodoStore);

  onAddTodo(title: string) {
    this.store.addTodo(title);
  }
}
