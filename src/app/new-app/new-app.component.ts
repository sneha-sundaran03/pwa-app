import { Component } from '@angular/core';
import { Task } from '../models/task';
@Component({
  selector: 'new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.css']
})
export class NewAppComponent {
  taskTitle = '';
  tasks: Task[] = [];

  addTask() {
    if (this.taskTitle.trim()) {
      this.tasks.push(new Task(this.taskTitle));
      this.taskTitle = '';
      this.saveTasks();
    }
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
    this.saveTasks();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks() {
    const data = localStorage.getItem('tasks');
    if (data) {
      this.tasks = JSON.parse(data);
    }
  }

  ngOnInit() {
    this.loadTasks();
  }
}
