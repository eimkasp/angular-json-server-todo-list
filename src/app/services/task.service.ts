import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // API Adresas is kur gausime duomenis
  private apiUrl : string = 'http://localhost:3000/tasks';
  constructor(private http : HttpClient) { }

  // Interface'o panaudojimas service dalyje
  getTasks() : Observable<Task[]> {
    let uri = this.apiUrl
    // Siuncama get uzklausa i API

    // .get() - gauname duomenis is duombazes
    return this.http.get<Task[]>(uri);
  }

  // Pakeiciame task.completed reiksme Serveryje
  toggleTask(task : Task) {

    // Budas 1 aprasyti kreipimasi i url
    let uri = this.apiUrl + "/" +  task.id;
    // Budas 2 aprasyti kreipimasi i url *string sujungimas
    uri = `${this.apiUrl}/${task.id}`;
    console.log("Uzklausa: " + uri);

    // Body objektas, apibrezti kokius laukelius gali atnaujinti si funkcija
    let body = { completed: task.completed }

    // Issiunciama uzklausa duomenu atnaujinimui
    // Daugiau pasiskaitymui apie http metodus angluar: https://blog.angular-university.io/angular-http/
    /* Kreipdamiesi Patch būdų, galime paredaguoti užduotį */
    return this.http.patch(uri, body);

    // Pvz atnaujinti visus duomenis is objekto
    return this.http.patch(uri, task);
  }

  createTask(task : Task) {
    let uri = this.apiUrl;
    // Kreipdamiesi POST metodu, galime sukurti nauja uzduoty duombazeje
    return this.http.post(uri, task);
  }

  deleteTask(task : Task) {
    let uri = this.apiUrl + "/" +  task.id;


    // Kreipdamisei DELETE metodu i: http://localhost:3000/tasks/id
    // Istrininame irasa duombazeje
    return this.http.delete(uri);
  }

  updateTask() {

  }


}
