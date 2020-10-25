import { Component, OnInit } from '@angular/core';
import { ContactService } from '../rulers/contact.service';

@Component({
  //selector: 'app-governer',
  templateUrl: './governer.component.html',
  styleUrls: ['./governer.component.css']
})
export class GovernerComponent implements OnInit {
  contacts: {}[];
 text="lecturers"

  ngOnInit(): void {
  }
  constructor(private userService: ContactService) {
    this.contacts = this.userService.getContacts();
  }

}
