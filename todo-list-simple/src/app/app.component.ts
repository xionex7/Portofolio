import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Simple Todo List';
  newTask: string = '';
  tasks: string[] = [];
  isChecked: boolean = false;

  addTask() {
    this.tasks.push(this.newTask);
  }

  deleteTask(){
    this.tasks.pop();
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  saveTask(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  checkValue(checked: boolean){
    this.isChecked = checked;
    if(this.isChecked == true){
      this.saveTask();
      this.isChecked = false;
    }
    else{
      localStorage.removeItem('tasks');
    }
  }
}
