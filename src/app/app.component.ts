import { Component } from '@angular/core';

// Importuojame tasks service
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-json-server-todo-list';

  public tasks : any = [];
  // Injectiname tasks service i komponenta
  constructor(private _taskService: TaskService) {

    // Gauname duomenis is task Service
    this._taskService
      .getTasks()
      .subscribe((data : any) => {
          this.tasks = data;
          // console.log(this.tasks);
      });
  }
}
