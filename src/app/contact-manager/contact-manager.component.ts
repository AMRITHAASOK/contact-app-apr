
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/model/myContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  // string Interpolation
  heading:string='Contact Details List';

//api - dependency injection
    constructor(private api:ApiService){}

  ngOnInit(): void {
   this.api.getAllContact().subscribe((data:MyContact)=>{
    console.log(data);//array of contacts
    
   })
  }

}
