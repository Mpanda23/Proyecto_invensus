import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasenviadasComponent } from './alertasenviadas.component';

describe('AlertasenviadasComponent', () => {
  let component: AlertasenviadasComponent;
  let fixture: ComponentFixture<AlertasenviadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertasenviadasComponent]
    });
    fixture = TestBed.createComponent(AlertasenviadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
