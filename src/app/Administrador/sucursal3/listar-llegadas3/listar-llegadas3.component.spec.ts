import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLlegadas3Component } from './listar-llegadas3.component';

describe('ListarLlegadas3Component', () => {
  let component: ListarLlegadas3Component;
  let fixture: ComponentFixture<ListarLlegadas3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarLlegadas3Component]
    });
    fixture = TestBed.createComponent(ListarLlegadas3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
