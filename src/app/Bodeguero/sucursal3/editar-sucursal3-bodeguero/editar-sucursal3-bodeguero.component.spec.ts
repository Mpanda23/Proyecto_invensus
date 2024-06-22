import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSucursal3BodegueroComponent } from './editar-sucursal3-bodeguero.component';

describe('EditarSucursal3BodegueroComponent', () => {
  let component: EditarSucursal3BodegueroComponent;
  let fixture: ComponentFixture<EditarSucursal3BodegueroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSucursal3BodegueroComponent]
    });
    fixture = TestBed.createComponent(EditarSucursal3BodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
