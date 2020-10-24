import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserServicex } from 'src/app/mocksX/user.service';
//import { UserService, UserServicex } from 'src/app/mocksX/user.service';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

// describe('UserComponent', () => {
//   // let component: UserComponent;
//   let comp: UserComponent;
//   let fixture: ComponentFixture<UserComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ UserComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserComponent);
//     // component = fixture.componentInstance;
//     comp = fixture.componentInstance; // UserComponent test instance
//     fixture.detectChanges();
//   });

describe('ContactComponent', () => {
  let comp: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
      TestBed.configureTestingModule({
          declarations: [
              UserComponent
          ],
          providers: [
              { provide: UserService, useClass: UserServicex }
          ]
      }).compileComponents().then(() => {
          fixture = TestBed.createComponent(UserComponent);
          comp = fixture.componentInstance; // UserComponent test instance
      });
  });



//   it(`should have one user`, () => {
//     expect(comp.users.length).toEqual(1);
// });

// it(`html should render one user`, () => {
//     fixture.detectChanges();
//     const el = fixture.nativeElement.querySelector('p');
//    // expect(el.innerText).toContain('user1');
//     expect(el.innerText).toContain('NORIA');
// });
//   it(`USER2-should have one user`, () => {
//     expect(comp.users.length).toEqual(3);
// });

// it(`USER3-html should render one user`, () => {
//     fixture.detectChanges();
//     const el = fixture.nativeElement.querySelector('p');
//    // expect(el.innerText).toContain('user1');
//     expect(el.innerText).toContain('NORIA');
// });

});
