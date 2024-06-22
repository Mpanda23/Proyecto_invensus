import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sucursal1JefeinventarioComponent } from './sucursal1-jefeinventario.component';

describe('Sucursal1JefeinventarioComponent', () => {
  let component: Sucursal1JefeinventarioComponent;
  let fixture: ComponentFixture<Sucursal1JefeinventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sucursal1JefeinventarioComponent]
    });
    fixture = TestBed.createComponent(Sucursal1JefeinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
