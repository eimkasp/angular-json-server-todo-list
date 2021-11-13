import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  /*
  TODO:
    deleteUser()
    resetForm() - funkcija isvalyti formos reiksmes
    Validacija - required ir kiti patikrinimai
  */

  public users: User[] = [];

  // Kintamasis irasyti naujai sukuriamo userio duomenis
  public newUser: User = {
    'name': '',
    'email': ''
  }

  // Standartinis avatar, kuris naudojamas jei vartotojas neturi nuotraukos
  public defaultAvatar: string = "assets/img/default-avatar.jpeg";

  public hideForm : boolean = true;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  toggleCreateForm() {
    this.hideForm = !this.hideForm;
  }


  getUsers() {
    this._userService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }


  addUser() {
    console.log(this.newUser);
    // Cia butu atlieka validacija
    this._userService.createUser(this.newUser).subscribe((data: any) => {

      // Po sukurimo, nustatome tuscias reiksmes, formos kintamiesiems
      this.newUser.name = "";
      this.newUser.email = "";
      this.getUsers();
    });
  }



}
