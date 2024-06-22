import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSucursal3Component } from './vista-sucursal3.component';

describe('VistaSucursal3Component', () => {
  let component: VistaSucursal3Component;
  let fixture: ComponentFixture<VistaSucursal3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaSucursal3Component]
    });
    fixture = TestBed.createComponent(VistaSucursal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
