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
    // Siuncama get uzklausa i API
    return this.http.get<Task[]>(this.apiUrl);
  }
}
