import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProveedoresDuenoComponent } from './listar-proveedores-dueno.component';

describe('ListarProveedoresDuenoComponent', () => {
  let component: ListarProveedoresDuenoComponent;
  let fixture: ComponentFixture<ListarProveedoresDuenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProveedoresDuenoComponent]
    });
    fixture = TestBed.createComponent(ListarProveedoresDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
