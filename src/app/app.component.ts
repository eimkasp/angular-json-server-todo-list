import { Component } from '@angular/core';
import { Task } from './interfaces/task';

// Importuojame tasks service
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-json-server-todo-list';

  // Nurodome, kad kintamasis yra Task tipo masyvas
  public tasks : Task[] = [];
  // Injectiname tasks service i komponenta
  constructor(private _taskService: TaskService) {

    // Gauname duomenis is task Service
    this._taskService
      .getTasks()
      .subscribe((data : Task[]) => {
          this.tasks = data;
          console.log(this.tasks);
      });
  }

  toggleTask(task : Task) {
    /* Jei task.completed buvo true, tai pataps false */
    /* Jei task.completed buvo false, tai pataps true */
    task.completed = !task.completed;
    console.log(task);

    // Iskvieciame task service toggle task funkcija
    // atnaujinti duomenis duombazeje/serveryje
    this._taskService.toggleTask(task).subscribe((data : any) => {
      console.log(data);
    });
  }
}
