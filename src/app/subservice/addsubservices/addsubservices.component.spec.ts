import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubservicesComponent } from './addsubservices.component';

describe('AddsubservicesComponent', () => {
  let component: AddsubservicesComponent;
  let fixture: ComponentFixture<AddsubservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsubservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsubservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
