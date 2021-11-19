import { fn } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, HostListener, Host } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';





@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {
  /* Klaviaturos mygtuku event listener pavyzdys */
  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: any) {
    /* event.key - grazina paspausto mygtuko koda */
    console.log(event);
    console.log(event.keyCode);
    // Escape - keyCode yra 27
    if (event.keyCode === 27) {
      this.toggleTaskDetails(null, true);
    }
  }

  // Injectiname tasks service i komponenta
  constructor(private _taskService: TaskService) {
    this.getTasks();
  }

  ngOnInit(): void {
  }

  public tasks: Task[] = [];

  // Kitamasis kuris pasako ar atvaizduoti task details komponenta
  public showTaskDetails: boolean = false;

  // Pasirinkta uzduotis, kurios informacija tures buti atvaizduojama <app-task-details> komponente
  public selectedTask: Task | null = null;

  toggleTaskDetails(task: Task | null, close: boolean = false) {

    if ((this.selectedTask == task || this.showTaskDetails == false) || this.selectedTask == null) {
      this.showTaskDetails = !this.showTaskDetails;
    }

    /* Force close */
    if (close) {
      this.showTaskDetails = false;
    }

    this.selectedTask = task;

    /* Jei uzdaromas taskDetails komponentas, selectedTask nustatoma null reiksme */
    if (this.showTaskDetails == false) {
      this.selectedTask = null;
    }
  }

  getTasks() {
    // Gauname duomenis is task Service
    this._taskService
      .getTasks(true)
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

    let userAction = confirm("Do you want to delete the task " + task.title +  "?");

    if(userAction) {
      this._taskService.deleteTask(task).subscribe(data => {
        console.log(data);
        // Po sekmingo istrynimo atnaujiname tasks duomenis
        this.getTasks();
      });
    }

  }

}
