import { Component, OnInit } from '@angular/core';
import { ContactService } from '../rulers/contact.service';
import { GovernerService } from './governer.service';

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
  constructor(private govService: GovernerService ) {
    this.contacts = this.govService.getContacts();
  }

}
