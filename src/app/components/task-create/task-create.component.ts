import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';
import { switchMap, tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

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
    userId: 0, // Priskiriame userId reiksme 0 - neegzistuojantis vartotojas
  };

  public priorties: string[] = ['low', 'medium', 'high'];

  public users: User[] = [];

  @Output() newItemEvent = new EventEmitter();


  constructor(
    private _taskService: TaskService,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
      this._userService.getUsers().subscribe((data: any) => {
        this.users = data;
        console.log("User Duomenys task-create komponente:");
        console.log(this.users);
      })
  }

  taskCreate(form: NgForm) {
    // console.log(form.controls.author.invalid);
    /* Patikriname ar visi formos laukeliai atitinka validacijos taisykles */
    if (form.valid) {
      this._taskService.createTask(this.task)
        .subscribe((data: any) => {
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
