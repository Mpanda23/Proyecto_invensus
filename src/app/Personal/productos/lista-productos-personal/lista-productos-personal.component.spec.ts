import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosPersonalComponent } from './lista-productos-personal.component';

describe('ListaProductosPersonalComponent', () => {
  let component: ListaProductosPersonalComponent;
  let fixture: ComponentFixture<ListaProductosPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaProductosPersonalComponent]
    });
    fixture = TestBed.createComponent(ListaProductosPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
