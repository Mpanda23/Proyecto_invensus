import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSucursal3Component } from './lista-sucursal3.component';

describe('ListaSucursal3Component', () => {
  let component: ListaSucursal3Component;
  let fixture: ComponentFixture<ListaSucursal3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSucursal3Component]
    });
    fixture = TestBed.createComponent(ListaSucursal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
