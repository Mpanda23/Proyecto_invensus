import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirLlegadaBodeguero1Component } from './anadir-llegada-bodeguero1.component';

describe('AnadirLlegadaBodeguero1Component', () => {
  let component: AnadirLlegadaBodeguero1Component;
  let fixture: ComponentFixture<AnadirLlegadaBodeguero1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirLlegadaBodeguero1Component]
    });
    fixture = TestBed.createComponent(AnadirLlegadaBodeguero1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
