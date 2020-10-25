import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';


@Component({
 // selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  text = 'user page';
  contacts: {}[];

  constructor(private contService: ContactService) {
    this.contacts = this.contService.getContacts();
  }

}
