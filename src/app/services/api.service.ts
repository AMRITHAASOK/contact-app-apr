import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/model/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
//dependency injection
  constructor(private http:HttpClient) { }

  //get function for getting all contact details
  getAllContact():Observable<MyContact>{

    return this.http.get('http://localhost:3000/contacts')

  }
}
