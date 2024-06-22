import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaJefeInventarioComponent } from './vista-jefe-inventario.component';

describe('VistaJefeInventarioComponent', () => {
  let component: VistaJefeInventarioComponent;
  let fixture: ComponentFixture<VistaJefeInventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaJefeInventarioComponent]
    });
    fixture = TestBed.createComponent(VistaJefeInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
