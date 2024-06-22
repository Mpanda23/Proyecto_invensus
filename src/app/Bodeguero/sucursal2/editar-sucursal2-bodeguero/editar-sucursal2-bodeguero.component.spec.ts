import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSucursal2BodegueroComponent } from './editar-sucursal2-bodeguero.component';

describe('EditarSucursal2BodegueroComponent', () => {
  let component: EditarSucursal2BodegueroComponent;
  let fixture: ComponentFixture<EditarSucursal2BodegueroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSucursal2BodegueroComponent]
    });
    fixture = TestBed.createComponent(EditarSucursal2BodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
