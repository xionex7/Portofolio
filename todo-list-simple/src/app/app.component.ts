import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Tasks } from './models/tasks.model';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Simple Todo List';
  newTask: string = '';
  tasks: Tasks[] = [];
  savedTasks: Tasks[] = [];
  isChecked: boolean = false;
  isDisabled: boolean = false;

  addTask() {
    this.tasks.push({
      id: this.tasks.length + 1,
      name: this.newTask
    });
    this.newTask = '';
  }

  deleteTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  saveTask(savedTasks: Tasks[] = []) {
    localStorage.setItem('savetasks', JSON.stringify(savedTasks));
  }

  onCheckboxChange(task: Tasks) {
    if (this.isChecked) {
      this.isDisabled = true;
      this.savedTasks.push(task);
      this.saveTask(this.savedTasks);
      this.isChecked = false;
    } else {
      this.savedTasks = this.savedTasks.filter((savedTask) => savedTask.id !== task.id);
      this.saveTask(this.savedTasks);
      this.isDisabled = false;
    }
  }
}
