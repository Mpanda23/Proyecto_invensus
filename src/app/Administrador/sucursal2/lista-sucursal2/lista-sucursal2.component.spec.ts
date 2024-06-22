import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSucursal2Component } from './lista-sucursal2.component';

describe('ListaSucursal2Component', () => {
  let component: ListaSucursal2Component;
  let fixture: ComponentFixture<ListaSucursal2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSucursal2Component]
    });
    fixture = TestBed.createComponent(ListaSucursal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
