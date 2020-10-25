import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ContactxService } from 'src/app/dbMock/contactx.service';
import { GovernerComponent } from './governer.component';
import { GovernerService } from './governer.service';

describe('GovernerComponent', () => {
  let component: GovernerComponent;
  let fixture: ComponentFixture<GovernerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernerComponent ],
      providers: [
        { provide: GovernerService, useClass: ContactxService }
            // 1. REAL DATA / 2. DUMMY DATA
     ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('GOVERNOR1-should create', () => {
    expect(component).toBeTruthy();
  });

  it(`GOVERNOR2-should have one user`, waitForAsync(() => {
    expect(component.contacts.length).toEqual(6);
}));

it(`GOVERNOR3-html should render one user`, waitForAsync(() => {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('p');
    expect(el.innerText).toContain('four');
}));
});
