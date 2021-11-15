import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';
import { switchMap, tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

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
    priority: "",
  };

  public priorties : string[] = ['low', 'medium', 'high'];

  @Output() newItemEvent = new EventEmitter();


  constructor(private _taskService: TaskService) { }

  ngOnInit(): void {
  }

  taskCreate(form : NgForm) {

    // console.log(form.controls.author.invalid);

    /* Patikriname ar visi formos laukeliai atitinka validacijos taisykles */
    if(form.valid) {
      this._taskService.createTask(this.task)
      .subscribe((data : any ) => {
        alert("Task succesfully added!");
        // Funkcija kuri nustato tuscias reiksmes formos laukeliams
        form.resetForm();
        this.newItemEvent.emit(data);
      });
    } else {
      // Atvaizduojame klaida ar pranesima, vartotojui, kad forma uzpildyta neteisingai
      alert("Please check your form data");
    }

  }

}
