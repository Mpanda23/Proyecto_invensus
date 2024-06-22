import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosSucursal3Component } from './registros-sucursal3.component';

describe('RegistrosSucursal3Component', () => {
  let component: RegistrosSucursal3Component;
  let fixture: ComponentFixture<RegistrosSucursal3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrosSucursal3Component]
    });
    fixture = TestBed.createComponent(RegistrosSucursal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
