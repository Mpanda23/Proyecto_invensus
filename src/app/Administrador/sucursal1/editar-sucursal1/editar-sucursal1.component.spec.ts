import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSucursal1Component } from './editar-sucursal1.component';

describe('EditarSucursal1Component', () => {
  let component: EditarSucursal1Component;
  let fixture: ComponentFixture<EditarSucursal1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSucursal1Component]
    });
    fixture = TestBed.createComponent(EditarSucursal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
