import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSucursal1BodegueroComponent } from './editar-sucursal1-bodeguero.component';

describe('EditarSucursal1BodegueroComponent', () => {
  let component: EditarSucursal1BodegueroComponent;
  let fixture: ComponentFixture<EditarSucursal1BodegueroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSucursal1BodegueroComponent]
    });
    fixture = TestBed.createComponent(EditarSucursal1BodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
