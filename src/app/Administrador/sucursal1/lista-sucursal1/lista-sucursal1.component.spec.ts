import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSucursal1Component } from './lista-sucursal1.component';

describe('ListaSucursal1Component', () => {
  let component: ListaSucursal1Component;
  let fixture: ComponentFixture<ListaSucursal1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSucursal1Component]
    });
    fixture = TestBed.createComponent(ListaSucursal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
