import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCategoriasComponent } from './lista-categorias.component';

describe('ListarCategoriasComponent', () => {
  let component: ListarCategoriasComponent;
  let fixture: ComponentFixture<ListarCategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCategoriasComponent]
    });
    fixture = TestBed.createComponent(ListarCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
