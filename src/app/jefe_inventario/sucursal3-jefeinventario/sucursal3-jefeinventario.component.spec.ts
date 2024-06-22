import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sucursal3JefeinventarioComponent } from './sucursal3-jefeinventario.component';

describe('Sucursal3JefeinventarioComponent', () => {
  let component: Sucursal3JefeinventarioComponent;
  let fixture: ComponentFixture<Sucursal3JefeinventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sucursal3JefeinventarioComponent]
    });
    fixture = TestBed.createComponent(Sucursal3JefeinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
