import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirLlegada3Component } from './anadir-llegada3.component';

describe('AnadirLlegada3Component', () => {
  let component: AnadirLlegada3Component;
  let fixture: ComponentFixture<AnadirLlegada3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirLlegada3Component]
    });
    fixture = TestBed.createComponent(AnadirLlegada3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
