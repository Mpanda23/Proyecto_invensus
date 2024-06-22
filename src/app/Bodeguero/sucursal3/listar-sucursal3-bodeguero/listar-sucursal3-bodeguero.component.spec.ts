import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSucursal3BodegueroComponent } from './listar-sucursal3-bodeguero.component';

describe('ListarSucursal3BodegueroComponent', () => {
  let component: ListarSucursal3BodegueroComponent;
  let fixture: ComponentFixture<ListarSucursal3BodegueroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarSucursal3BodegueroComponent]
    });
    fixture = TestBed.createComponent(ListarSucursal3BodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
