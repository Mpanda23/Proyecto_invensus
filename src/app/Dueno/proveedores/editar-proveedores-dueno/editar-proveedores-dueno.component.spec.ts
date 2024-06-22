import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProveedoresDuenoComponent } from './editar-proveedores-dueno.component';

describe('EditarProveedoresDuenoComponent', () => {
  let component: EditarProveedoresDuenoComponent;
  let fixture: ComponentFixture<EditarProveedoresDuenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarProveedoresDuenoComponent]
    });
    fixture = TestBed.createComponent(EditarProveedoresDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
