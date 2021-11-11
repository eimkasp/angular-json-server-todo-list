import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {

  public task: Task = {
    title: "",
    completed: false,
    author: "",
  };

  @Output() newItemEvent = new EventEmitter();


  constructor(private _taskService: TaskService) { }

  ngOnInit(): void {
  }

  taskCreate() {
    console.log("form submit works");
    console.log(this.task);
    this._taskService.createTask(this.task)
      .subscribe((data : any ) => {
        alert("Task succesfully added!");
        console.log(data);
        this.newItemEvent.emit(data);
      });
  }

}
