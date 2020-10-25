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
  zed1 = 'this SECOND zed Text';
  zed2 = 'this THIRD zed Text';

}
