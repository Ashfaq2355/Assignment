import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsCardComponent } from './country-details-card.component';

describe('CountryDetailsCardComponent', () => {
  let component: CountryDetailsCardComponent;
  let fixture: ComponentFixture<CountryDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDetailsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
