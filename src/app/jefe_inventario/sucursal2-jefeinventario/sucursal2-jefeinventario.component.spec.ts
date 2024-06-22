import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sucursal2JefeinventarioComponent } from './sucursal2-jefeinventario.component';

describe('Sucursal2JefeinventarioComponent', () => {
  let component: Sucursal2JefeinventarioComponent;
  let fixture: ComponentFixture<Sucursal2JefeinventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sucursal2JefeinventarioComponent]
    });
    fixture = TestBed.createComponent(Sucursal2JefeinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
