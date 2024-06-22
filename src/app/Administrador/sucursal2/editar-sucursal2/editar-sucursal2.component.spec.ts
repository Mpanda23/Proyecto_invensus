import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSucursal2Component } from './editar-sucursal2.component';

describe('EditarSucursal2Component', () => {
  let component: EditarSucursal2Component;
  let fixture: ComponentFixture<EditarSucursal2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSucursal2Component]
    });
    fixture = TestBed.createComponent(EditarSucursal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
