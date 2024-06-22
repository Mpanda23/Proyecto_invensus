import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsuariosInactivosComponent } from './listar-usuarios-inactivos.component';

describe('ListarUsuariosInactivosComponent', () => {
  let component: ListarUsuariosInactivosComponent;
  let fixture: ComponentFixture<ListarUsuariosInactivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarUsuariosInactivosComponent]
    });
    fixture = TestBed.createComponent(ListarUsuariosInactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
