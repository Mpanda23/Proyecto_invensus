import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasBodegueroComponent } from './alertas-bodeguero.component';

describe('AlertasBodegueroComponent', () => {
  let component: AlertasBodegueroComponent;
  let fixture: ComponentFixture<AlertasBodegueroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertasBodegueroComponent]
    });
    fixture = TestBed.createComponent(AlertasBodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
