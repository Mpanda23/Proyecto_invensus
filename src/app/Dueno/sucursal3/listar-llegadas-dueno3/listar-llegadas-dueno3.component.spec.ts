import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLlegadasDueno3Component } from './listar-llegadas-dueno3.component';

describe('ListarLlegadasDueno3Component', () => {
  let component: ListarLlegadasDueno3Component;
  let fixture: ComponentFixture<ListarLlegadasDueno3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarLlegadasDueno3Component]
    });
    fixture = TestBed.createComponent(ListarLlegadasDueno3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
