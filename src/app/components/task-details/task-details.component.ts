import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {


  // Pasirinktos uzduoties Task objektas
  @Input() task : Task| null = null;
  @Output() taskDetailsCloseEvent : EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.task);
  }

  closeTaskDetails() {
    this.taskDetailsCloseEvent.emit(true);
  }

}
