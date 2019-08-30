import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Allows for HTTP requests

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // uses HttpClient in constructors to perform HTTP requests
  constructor(private _http: HttpClient) { 
    this.getAuthors();
  }

  getAuthors() {
    // store the HTTP response as an Observable
    let authors = this._http.get('/authors');

    // use subscribe function to access the Observable data
    authors.subscribe(data => console.log("Got the authors!", data));
  }
}
