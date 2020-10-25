import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ContactxService } from 'src/app/dbMock/contactx.service';
import { ContactService } from './contact.service';
import { UserComponent } from './user.component';

describe('ContactComponent', () => {
    let compObjectUser: UserComponent;
    let fixture: ComponentFixture<UserComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserComponent
            ],
            providers: [
                { provide: ContactService, useClass: ContactxService }
                    // REAL/ DUMMY
             ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(UserComponent);
            compObjectUser = fixture.componentInstance; 
        });
    }));

    it('USER1-should create', () => {
        expect(compObjectUser).toBeTruthy();
      });

    it(`USER2-should have one user`, waitForAsync(() => {
        expect(compObjectUser.contacts.length).toEqual(2);
    }));

    it(`USER3-html should render one user`, waitForAsync(() => {
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('p');
        expect(el.innerText).toContain('NORIA');
    }));
});
   
