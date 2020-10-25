import { ContactComponent } from './contact.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { ComponentFixture, waitForAsync, TestBed } from '@angular/core/testing';

describe('ContactComponent', () => {
  let compObject: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let he: HTMLElement;

  beforeEach(waitForAsync(() => {
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

      compObject = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      he = de.nativeElement;
    });
  }));

  it(`CONTACT #1 - should have as text 'contact page'`, waitForAsync(() => {
    expect(compObject.text).toEqual('contact page');
  }));

  it(`CONTACT #2 - should set submitted to true`, waitForAsync(() => {
    compObject.onSubmit();
    expect(compObject.submitted).toBeTruthy();
  }));

  it(`CONTACT #3 - form should be invalid`, waitForAsync(() => {
    compObject.contactForm.controls['name'].setValue('');
    compObject.contactForm.controls['mobile'].setValue('');
    compObject.contactForm.controls['office'].setValue('');
    compObject.contactForm.controls['email'].setValue('');
    compObject.contactForm.controls['stars'].setValue('');
    expect(compObject.contactForm.valid).toBeFalsy();
  }));

  it(`CONTACT #4 - form should be valid`, waitForAsync(() => {
    compObject.contactForm.controls['name'].setValue('Nikolas');
    compObject.contactForm.controls['mobile'].setValue('98058776');
    compObject.contactForm.controls['office'].setValue('64658767');
    compObject.contactForm.controls['email'].setValue('nikolas@gmail.com');
    compObject.contactForm.controls['stars'].setValue('FIVE');
    expect(compObject.contactForm.valid).toBeTruthy();
  }));

    // it(`should call the onSubmit method`, waitForAsync(() => {
  //   spyOn(compObject, 'onSubmit');
  //   he = fixture.debugElement.query(By.css('button')).nativeElement;
  //   he.click();
  //   expect(compObject.onSubmit).toHaveBeenCalled();
  // }));
});

