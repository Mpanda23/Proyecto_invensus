import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsuariosInactivosDuenoComponent } from './listar-usuarios-inactivos-dueno.component';

describe('ListarUsuariosInactivosDuenoComponent', () => {
  let component: ListarUsuariosInactivosDuenoComponent;
  let fixture: ComponentFixture<ListarUsuariosInactivosDuenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarUsuariosInactivosDuenoComponent]
    });
    fixture = TestBed.createComponent(ListarUsuariosInactivosDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
