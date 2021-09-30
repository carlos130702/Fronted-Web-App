import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveDriverComponent } from './reserve-driver.component';

describe('ReserveDriverComponent', () => {
  let component: ReserveDriverComponent;
  let fixture: ComponentFixture<ReserveDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
