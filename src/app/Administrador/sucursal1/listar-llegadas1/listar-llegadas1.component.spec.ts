import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLlegadas1Component } from './listar-llegadas1.component';

describe('ListarLlegadas1Component', () => {
  let component: ListarLlegadas1Component;
  let fixture: ComponentFixture<ListarLlegadas1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarLlegadas1Component]
    });
    fixture = TestBed.createComponent(ListarLlegadas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
