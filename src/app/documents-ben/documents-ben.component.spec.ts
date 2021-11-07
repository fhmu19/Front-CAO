import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsBenComponent } from './documents-ben.component';

describe('DocumentsBenComponent', () => {
  let component: DocumentsBenComponent;
  let fixture: ComponentFixture<DocumentsBenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsBenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsBenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
