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
  public userTasks: Task[] | null = null;

  private userId: string | null = null;

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

    this._userService.getUser(this.userId).subscribe((data: any) => {
      this.user = data;
      this.getUserTasks();
    })
  }

  getUserTasks() {
    this._taskService.getTasks()
      .pipe(
        map((tasks) => {
          // For Each alternatyva
          console.log(tasks);
          // Isfiltruoti uzduotis kuriu user_id sutampa su user.id
          return tasks.filter(task => task.user_id == this.user?.id);
        }),
      )
      .subscribe((tasks: any) => {
        this.userTasks = tasks;
      });
  }

}
