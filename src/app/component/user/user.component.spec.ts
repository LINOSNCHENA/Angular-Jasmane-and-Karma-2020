import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserServicex } from 'src/app/dbMock/user.service';
import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('ContactComponent', () => {
    let comp: UserComponent;
    let fixture: ComponentFixture<UserComponent>;

    beforeEach(async(() => {
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
    }));

    it(`should have one user`, async(() => {
        expect(comp.contacts.length).toEqual(1);
    }));

    it(`html should render one user`, async(() => {
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('p');
        expect(el.innerText).toContain('NORIA');
    }));
});
   
