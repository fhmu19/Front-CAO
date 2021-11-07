import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBenComponent } from './register-ben.component';

describe('RegisterBenComponent', () => {
  let component: RegisterBenComponent;
  let fixture: ComponentFixture<RegisterBenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
