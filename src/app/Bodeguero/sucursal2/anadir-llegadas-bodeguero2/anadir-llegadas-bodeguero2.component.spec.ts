import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirLlegadasBodeguero2Component } from './anadir-llegadas-bodeguero2.component';

describe('AnadirLlegadasBodeguero2Component', () => {
  let component: AnadirLlegadasBodeguero2Component;
  let fixture: ComponentFixture<AnadirLlegadasBodeguero2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirLlegadasBodeguero2Component]
    });
    fixture = TestBed.createComponent(AnadirLlegadasBodeguero2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
