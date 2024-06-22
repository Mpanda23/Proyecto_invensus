import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirSucursal2Component } from './anadir-sucursal2.component';

describe('AnadirSucursal2Component', () => {
  let component: AnadirSucursal2Component;
  let fixture: ComponentFixture<AnadirSucursal2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirSucursal2Component]
    });
    fixture = TestBed.createComponent(AnadirSucursal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
