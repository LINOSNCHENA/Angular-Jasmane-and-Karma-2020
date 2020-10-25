import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    // selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {

    text = 'contact page';
    contactForm: FormGroup;
    contact = {
        name: '',
        email: '',
        mobile: '',
        office: '',
        stars: ''
    };
    submitted = false;

    constructor() {
        this.createForm();
    }

    createForm(): void {
        this.contactForm = new FormGroup({
            'name': new FormControl(this.contact.name, [
                Validators.required,
                Validators.minLength(4)
            ]),
            'mobile': new FormControl(this.contact.mobile, Validators.required),
            'office': new FormControl(this.contact.mobile, Validators.required),
            'email': new FormControl(this.contact.email, [
                Validators.required,
                Validators.email
            ]),
            'stars': new FormControl(this.contact.mobile, Validators.required)
        });
    }

    onSubmit(): void {
        this.submitted = true;
    }

}
