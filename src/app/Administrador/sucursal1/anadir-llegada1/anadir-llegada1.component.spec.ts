import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirLlegada1Component } from './anadir-llegada1.component';

describe('AnadirLlegada1Component', () => {
  let component: AnadirLlegada1Component;
  let fixture: ComponentFixture<AnadirLlegada1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirLlegada1Component]
    });
    fixture = TestBed.createComponent(AnadirLlegada1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
