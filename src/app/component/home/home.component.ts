import { Component, OnInit } from '@angular/core';

@Component({
 // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  text = 'home page ZAMBIA';
  quoteText = 'this text is meant to be quoted';
  ContactsText = 'this text is meant to be quoted, The list of Contacts of 2020';

}
