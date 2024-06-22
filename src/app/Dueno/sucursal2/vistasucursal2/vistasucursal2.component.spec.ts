import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vistasucursal2Component } from './vistasucursal2.component';

describe('Vistasucursal2Component', () => {
  let component: Vistasucursal2Component;
  let fixture: ComponentFixture<Vistasucursal2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vistasucursal2Component]
    });
    fixture = TestBed.createComponent(Vistasucursal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
