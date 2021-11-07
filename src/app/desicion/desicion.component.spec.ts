import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesicionComponent } from './desicion.component';

describe('DesicionComponent', () => {
  let component: DesicionComponent;
  let fixture: ComponentFixture<DesicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
