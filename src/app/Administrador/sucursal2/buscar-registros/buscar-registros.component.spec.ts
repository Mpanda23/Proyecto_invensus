import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarRegistros2Component } from './buscar-registros.component';

describe('BuscarRegistros2Component', () => {
  let component: BuscarRegistros2Component;
  let fixture: ComponentFixture<BuscarRegistros2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarRegistros2Component]
    });
    fixture = TestBed.createComponent(BuscarRegistros2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
