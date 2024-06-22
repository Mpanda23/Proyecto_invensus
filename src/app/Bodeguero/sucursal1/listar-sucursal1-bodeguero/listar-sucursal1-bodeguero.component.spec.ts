import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSucursal1BodegueroComponent } from './listar-sucursal1-bodeguero.component';

describe('ListarSucursal1BodegueroComponent', () => {
  let component: ListarSucursal1BodegueroComponent;
  let fixture: ComponentFixture<ListarSucursal1BodegueroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarSucursal1BodegueroComponent]
    });
    fixture = TestBed.createComponent(ListarSucursal1BodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
