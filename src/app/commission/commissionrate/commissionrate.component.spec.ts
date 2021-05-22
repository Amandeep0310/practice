import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionrateComponent } from './commissionrate.component';

describe('CommissionrateComponent', () => {
  let component: CommissionrateComponent;
  let fixture: ComponentFixture<CommissionrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissionrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
