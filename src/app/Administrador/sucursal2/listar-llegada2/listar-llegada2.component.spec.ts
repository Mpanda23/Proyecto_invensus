import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLlegada2Component } from './listar-llegada2.component';

describe('ListarLlegada2Component', () => {
  let component: ListarLlegada2Component;
  let fixture: ComponentFixture<ListarLlegada2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarLlegada2Component]
    });
    fixture = TestBed.createComponent(ListarLlegada2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
