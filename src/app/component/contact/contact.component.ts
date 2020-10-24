import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  // selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  text = 'contact page';
  text2 = ' SECOND CONTACT PAGE';
  contactForm: FormGroup;
  contact = {
      name: '',
      email: '',
      text: ''
  };
  contactForm2: FormGroup;
  contact2 = {
      NAME: '',
      DEPT: '',
      SALARY: ''
  };
  submitted = false;

  constructor() {
      this.createForm();
      this.createContact();
  }

  createForm(): void {
      this.contactForm = new FormGroup({
          'name': new FormControl(this.contact.name, [
              Validators.required,
              Validators.minLength(4)
          ]),
          'email': new FormControl(this.contact.email, [
              Validators.required,
              Validators.email
          ]),
          'text': new FormControl(this.contact.text, Validators.required)
      });
  }



  createContact(): void {
      this.contactForm2 = new FormGroup({
          'NAME': new FormControl(this.contact2.NAME, [
              Validators.required,
              Validators.minLength(4)
          ]),
          'DEPT': new FormControl(this.contact2.DEPT, [
              Validators.required,
              Validators.email
          ]),
          'SALARY': new FormControl(this.contact2.SALARY, Validators.required)
      });
  }

  onSubmit(): void {
    this.submitted = true;
}

}
