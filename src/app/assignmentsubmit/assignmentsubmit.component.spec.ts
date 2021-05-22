import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsubmitComponent } from './assignmentsubmit.component';

describe('AssignmentsubmitComponent', () => {
  let component: AssignmentsubmitComponent;
  let fixture: ComponentFixture<AssignmentsubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentsubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
