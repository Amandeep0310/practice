import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesubservicesComponent } from './managesubservices.component';

describe('ManagesubservicesComponent', () => {
  let component: ManagesubservicesComponent;
  let fixture: ComponentFixture<ManagesubservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagesubservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesubservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
