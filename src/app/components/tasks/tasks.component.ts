import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  // Injectiname tasks service i komponenta
  constructor(private _taskService: TaskService) {
    this.getTasks();
  }

  ngOnInit(): void {
  }

  public tasks: Task[] = [];

  // Kitamasis kuris pasako ar atvaizduoti task details komponenta
  public showTaskDetails : boolean = false;

  // Pasirinkta uzduotis, kurios informacija tures buti atvaizduojama <app-task-details> komponente
  public selectedTask : Task | null = null;

  toggleTaskDetails(task : Task) {

    if((this.selectedTask == task || this.showTaskDetails == false)  || this.selectedTask == null) {
      this.showTaskDetails = !this.showTaskDetails;
    }


    this.selectedTask = task;
  }

  getTasks() {
    // Gauname duomenis is task Service
    this._taskService
      .getTasks()
      .subscribe((data: Task[]) => {
        this.tasks = data;
        console.log(this.tasks);
      });
  }

  toggleTask(task: Task) {
    /* Jei task.completed buvo true, tai pataps false */
    /* Jei task.completed buvo false, tai pataps true */
    task.completed = !task.completed;
    console.log(task);

    // Iskvieciame task service toggle task funkcija
    // atnaujinti duomenis duombazeje/serveryje
    this._taskService.toggleTask(task).subscribe((data: any) => {
      console.log(data);
    });
  }

  deleteTask(task: Task) {
    console.log('Task Will be deleted:');
    console.log(task);
    this._taskService.deleteTask(task).subscribe(data => {
      console.log(data);
      // Po sekmingo istrynimo atnaujiname tasks duomenis
      this.getTasks();
    });
  }

}
