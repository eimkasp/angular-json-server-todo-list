import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Api uzklausos kelias
  private apiUrl : string = 'http://localhost:3000/users';

  constructor(private http : HttpClient) {

  }

  // Funkcija gauti visiems useriams
  getUsers() {
    let uri = this.apiUrl;
    return this.http.get(uri);
  }

  createUser(user : User) {
    let uri = this.apiUrl;

    let body = user;

    return this.http.post(uri, body);
  }
}
