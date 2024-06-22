import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSucursal3Component } from './editar-sucursal3.component';

describe('EditarSucursal3Component', () => {
  let component: EditarSucursal3Component;
  let fixture: ComponentFixture<EditarSucursal3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSucursal3Component]
    });
    fixture = TestBed.createComponent(EditarSucursal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
