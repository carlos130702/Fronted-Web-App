import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDriverComponent } from './reservation-driver.component';

describe('ReservationDriverComponent', () => {
  let component: ReservationDriverComponent;
  let fixture: ComponentFixture<ReservationDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
