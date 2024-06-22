import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirSucursal1Component } from './anadir-sucursal1.component';

describe('AnadirSucursal1Component', () => {
  let component: AnadirSucursal1Component;
  let fixture: ComponentFixture<AnadirSucursal1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirSucursal1Component]
    });
    fixture = TestBed.createComponent(AnadirSucursal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
