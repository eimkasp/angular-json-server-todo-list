import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // API Adresas is kur gausime duomenis
  private apiUrl : string = 'http://localhost:3000/tasks';
  constructor(private http : HttpClient) { }

  getTasks() {
    return "labas";
  }
}
