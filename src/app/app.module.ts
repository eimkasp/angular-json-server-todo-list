import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Reikalinga, kad galetume naudoti HttpClient funkcijas
// savo komponentuose ir service
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './components/tasks/tasks.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskCreateComponent,
    TasksComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // importuojame,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
