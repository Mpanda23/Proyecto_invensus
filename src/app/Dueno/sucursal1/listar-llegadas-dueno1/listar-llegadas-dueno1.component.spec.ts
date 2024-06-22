import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLlegadasDueno1Component } from './listar-llegadas-dueno1.component';

describe('ListarLlegadasDueno1Component', () => {
  let component: ListarLlegadasDueno1Component;
  let fixture: ComponentFixture<ListarLlegadasDueno1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarLlegadasDueno1Component]
    });
    fixture = TestBed.createComponent(ListarLlegadasDueno1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
