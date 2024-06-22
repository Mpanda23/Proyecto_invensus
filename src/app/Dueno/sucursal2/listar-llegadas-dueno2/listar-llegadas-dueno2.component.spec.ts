import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLlegadasDueno2Component } from './listar-llegadas-dueno2.component';

describe('ListarLlegadasDueno2Component', () => {
  let component: ListarLlegadasDueno2Component;
  let fixture: ComponentFixture<ListarLlegadasDueno2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarLlegadasDueno2Component]
    });
    fixture = TestBed.createComponent(ListarLlegadasDueno2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
