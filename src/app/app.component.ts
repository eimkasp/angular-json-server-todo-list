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
  // Injectiname tasks service i komponenta
  constructor() {
  }
}
