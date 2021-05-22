import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecommissionComponent } from './managecommission.component';

describe('ManagecommissionComponent', () => {
  let component: ManagecommissionComponent;
  let fixture: ComponentFixture<ManagecommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecommissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
