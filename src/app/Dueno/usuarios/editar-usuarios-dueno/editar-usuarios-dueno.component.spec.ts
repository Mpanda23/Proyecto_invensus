import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUsuariosDuenoComponent } from './editar-usuarios-dueno.component';

describe('EditarUsuariosDuenoComponent', () => {
  let component: EditarUsuariosDuenoComponent;
  let fixture: ComponentFixture<EditarUsuariosDuenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarUsuariosDuenoComponent]
    });
    fixture = TestBed.createComponent(EditarUsuariosDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
