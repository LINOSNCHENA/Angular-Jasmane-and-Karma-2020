import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';


@Component({
 // selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  text = 'user page';
  contacts: {}[];

  constructor(private userService: UserService) {
    this.contacts = this.userService.getContacts();
  }

}
