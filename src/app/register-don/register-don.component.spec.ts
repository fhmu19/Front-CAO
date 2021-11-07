import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDonComponent } from './register-don.component';

describe('RegisterDonComponent', () => {
  let component: RegisterDonComponent;
  let fixture: ComponentFixture<RegisterDonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
