import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-json-server-todo-list';

  constructor(private _taskService : TaskService) {

    // Gauname duomenis is task Service
      this._taskService.getTasks().subscribe((data) => {
        console.log(data);
      });

  }

}
