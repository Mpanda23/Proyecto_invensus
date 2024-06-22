import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaPersonalComponent } from './venta-personal.component';

describe('VentaPersonalComponent', () => {
  let component: VentaPersonalComponent;
  let fixture: ComponentFixture<VentaPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaPersonalComponent]
    });
    fixture = TestBed.createComponent(VentaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
