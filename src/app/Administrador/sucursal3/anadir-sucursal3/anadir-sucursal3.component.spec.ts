import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirSucursal3Component } from './anadir-sucursal3.component';

describe('AnadirSucursal3Component', () => {
  let component: AnadirSucursal3Component;
  let fixture: ComponentFixture<AnadirSucursal3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirSucursal3Component]
    });
    fixture = TestBed.createComponent(AnadirSucursal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
