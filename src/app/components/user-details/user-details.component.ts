import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Task } from 'src/app/interfaces/task';
import { User } from 'src/app/interfaces/user';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public user: User | null = null;
  private userId: string | null = null;

  public userTasks : Task[] | null = null;

  constructor(
    private _userService: UserService,
    private _taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    // Gauname :id parametra
    /* Noredami naudoti si buta, butinai turime konstruktoriuje prideti:
    private route: ActivatedRoute,
    private router: Router
    */
    this.userId = this.route.snapshot.paramMap.get('id');


    // Vartotojo info
    this._userService.getUser(this.userId)
      .subscribe((data: User) => {
        this.user = data;
        this.getUserTask();
      })
  }

  getUserTask() {
    // Vartotojo uzduotys
    this._taskService.getTasks()
    .pipe(
      map(data => {
        console.log(this.user?.id);
        return data.filter(task => task.id == this.user?.id)
      })
    )
    .subscribe((data: any) => {
      console.log(data);
    });
  }

}
