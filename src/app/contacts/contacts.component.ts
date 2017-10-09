import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  title:string ='Contacts';
  constructor() { 
  	setTimeout(() => {
  		this.title = 'New title';
  	}, 5000)
  }

  ngOnInit() {
  }

}
