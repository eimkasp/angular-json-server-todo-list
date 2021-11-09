import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Reikalinga, kad galetume naudoti HttpClient funkcijas
// savo komponentuose ir service
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // importuojame
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
