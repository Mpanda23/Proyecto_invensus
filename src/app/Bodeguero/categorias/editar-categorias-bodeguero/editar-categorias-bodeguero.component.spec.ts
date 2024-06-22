import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCategoriasBodegueroComponent } from './editar-categorias-bodeguero.component';

describe('EditarCategoriasBodegueroComponent', () => {
  let component: EditarCategoriasBodegueroComponent;
  let fixture: ComponentFixture<EditarCategoriasBodegueroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCategoriasBodegueroComponent]
    });
    fixture = TestBed.createComponent(EditarCategoriasBodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
