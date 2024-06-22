import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProveedoresInactivosDuenoComponent } from './listar-proveedores-inactivos-dueno.component';

describe('ListarProveedoresInactivosDuenoComponent', () => {
  let component: ListarProveedoresInactivosDuenoComponent;
  let fixture: ComponentFixture<ListarProveedoresInactivosDuenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProveedoresInactivosDuenoComponent]
    });
    fixture = TestBed.createComponent(ListarProveedoresInactivosDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
