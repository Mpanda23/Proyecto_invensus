import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProveedoresInactivosComponent } from './listar-proveedores-inactivos.component';

describe('ListarProveedoresInactivosComponent', () => {
  let component: ListarProveedoresInactivosComponent;
  let fixture: ComponentFixture<ListarProveedoresInactivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProveedoresInactivosComponent]
    });
    fixture = TestBed.createComponent(ListarProveedoresInactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
