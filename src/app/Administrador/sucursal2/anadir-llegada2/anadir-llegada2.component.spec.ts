import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirLlegada2Component } from './anadir-llegada2.component';

describe('AnadirLlegada2Component', () => {
  let component: AnadirLlegada2Component;
  let fixture: ComponentFixture<AnadirLlegada2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirLlegada2Component]
    });
    fixture = TestBed.createComponent(AnadirLlegada2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
