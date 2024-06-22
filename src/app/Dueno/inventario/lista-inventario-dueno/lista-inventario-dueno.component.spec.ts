import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInventarioDuenoComponent } from './lista-inventario-dueno.component';

describe('ListaInventarioDuenoComponent', () => {
  let component: ListaInventarioDuenoComponent;
  let fixture: ComponentFixture<ListaInventarioDuenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaInventarioDuenoComponent]
    });
    fixture = TestBed.createComponent(ListaInventarioDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
