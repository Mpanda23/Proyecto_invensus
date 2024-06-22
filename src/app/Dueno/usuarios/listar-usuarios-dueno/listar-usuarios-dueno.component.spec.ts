import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsuariosDuenoComponent } from './listar-usuarios-dueno.component';

describe('ListarUsuariosDuenoComponent', () => {
  let component: ListarUsuariosDuenoComponent;
  let fixture: ComponentFixture<ListarUsuariosDuenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarUsuariosDuenoComponent]
    });
    fixture = TestBed.createComponent(ListarUsuariosDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
