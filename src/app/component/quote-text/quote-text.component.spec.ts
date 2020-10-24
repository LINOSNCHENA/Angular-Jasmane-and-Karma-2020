import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteTextComponent } from './quote-text.component';

describe('QuoteTextComponent', () => {
  let component: QuoteTextComponent;
  let fixture: ComponentFixture<QuoteTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('QUATE1-should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render @input`, () => {
    const fixture = TestBed.createComponent(QuoteTextComponent);
    const app = fixture.debugElement.componentInstance;
    app.text = 'test quote';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('q').innerText).toEqual('test quote');
  });

});
