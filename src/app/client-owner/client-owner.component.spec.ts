import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOwnerComponent } from './client-owner.component';

describe('ClientOwnerComponent', () => {
  let component: ClientOwnerComponent;
  let fixture: ComponentFixture<ClientOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
