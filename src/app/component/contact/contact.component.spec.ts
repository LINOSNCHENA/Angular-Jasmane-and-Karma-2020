import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';

  describe('ContactComponent', () => {
    let comp: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;
    let de: DebugElement;
    let el: HTMLElement;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          ContactComponent
        ],
        imports: [
          BrowserModule,
          FormsModule,
          ReactiveFormsModule
        ]
      }).compileComponents().then(() => {
        fixture = TestBed.createComponent(ContactComponent);
  
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
    });


  // it(`CONTACTS #1 -should have as text 'contact page'`, () => {
  //   expect(comp.text).toEqual('contact page');
  // });

  // it(`CONTACTS #2 -should set submitted to true`, () => {
  //   comp.onSubmit();
  //   expect(comp.submitted).toBeTruthy();
  // });

  // it(`CONTACTS #3 -should call the onSubmit method`, () => {
  //   spyOn(comp, 'onSubmit');
  //   el = fixture.debugElement.query(By.css('button')).nativeElement;
  //   el.click();
  //   expect(comp.onSubmit).toHaveBeenCalled();
  // });

//  it(`CONTACTS #4 -form should be invalid`, () => {
//     comp.contactForm.controls['email'].setValue('');
//     comp.contactForm.controls['name'].setValue('');
//     comp.contactForm.controls['text'].setValue('');
//     expect(comp.contactForm.valid).toBeFalsy();
//   });

//   it(`CONTACTS #5 -form should be valid`, () => {
//     comp.contactForm.controls['email'].setValue('asd@asd.com');
//     comp.contactForm.controls['name'].setValue('aada');
//     comp.contactForm.controls['text'].setValue('text');
//     expect(comp.contactForm.valid).toBeTruthy();
//   });
});
