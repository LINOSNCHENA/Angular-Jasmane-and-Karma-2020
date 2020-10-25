import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryComponent } from './summary.component';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('QUATE1-should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render @input`, () => {
    const fixture = TestBed.createComponent(SummaryComponent);
    const app = fixture.debugElement.componentInstance;
    app.text = 'test quote';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('q').innerText).toEqual('test quote');
  });

});
