import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSucursal2BodegueroComponent } from './listar-sucursal2-bodeguero.component';

describe('ListarSucursal2BodegueroComponent', () => {
  let component: ListarSucursal2BodegueroComponent;
  let fixture: ComponentFixture<ListarSucursal2BodegueroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarSucursal2BodegueroComponent]
    });
    fixture = TestBed.createComponent(ListarSucursal2BodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
