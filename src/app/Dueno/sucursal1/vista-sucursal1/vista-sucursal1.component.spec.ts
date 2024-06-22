import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSucursal1Component } from './vista-sucursal1.component';

describe('VistaSucursal1Component', () => {
  let component: VistaSucursal1Component;
  let fixture: ComponentFixture<VistaSucursal1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaSucursal1Component]
    });
    fixture = TestBed.createComponent(VistaSucursal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
