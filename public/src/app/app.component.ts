import { Component } from '@angular/core';
import { HttpService } from './http.service'; // import from http.service.ts -- GET functions

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  constructor(private _httpService: HttpService) {} // dependency injection into app
}
