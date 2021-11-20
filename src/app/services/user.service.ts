import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Api uzklausos kelias
  private apiUrl: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient,
    private tasksService: TaskService) {

  }

  // Funkcija gauti visiems useriams
  getUsers(): Observable<User[]> {
    let uri = this.apiUrl;
    return this.http.get<User[]>(uri);
  }

  getUser(id: any): Observable<User> {
    let uri = this.apiUrl;
    uri += "/" + id;


    return this.http.get<User>(uri).pipe(
      map(user => {
        return user;
      })
    );
  }

  createUser(user: User) {
    let uri = this.apiUrl;

    let body = user;

    return this.http.post(uri, body);
  }

  deleteUser(user: User) {
    let uri = this.apiUrl;

    uri += "/" + user.id;

    return this.http.delete(uri);
  }

}
