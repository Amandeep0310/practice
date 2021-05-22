import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorserviceComponent } from './vendorservice.component';

describe('VendorserviceComponent', () => {
  let component: VendorserviceComponent;
  let fixture: ComponentFixture<VendorserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
