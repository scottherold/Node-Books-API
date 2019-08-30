import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service'; // import from http.service.ts -- GET functions
import { HttpClientModule } from '@angular/common/http'; // Allows for HTTP requests

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // for HTTP requests
  ],
  providers: [HttpService], // Added HttpService from imports
  bootstrap: [AppComponent]
})
export class AppModule { }
