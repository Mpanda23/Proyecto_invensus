import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirLlegadasBodeguero3Component } from './anadir-llegadas-bodeguero3.component';

describe('AnadirLlegadasBodeguero3Component', () => {
  let component: AnadirLlegadasBodeguero3Component;
  let fixture: ComponentFixture<AnadirLlegadasBodeguero3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirLlegadasBodeguero3Component]
    });
    fixture = TestBed.createComponent(AnadirLlegadasBodeguero3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
