import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasPersonalComponent } from './alertas-personal.component';

describe('AlertasPersonalComponent', () => {
  let component: AlertasPersonalComponent;
  let fixture: ComponentFixture<AlertasPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertasPersonalComponent]
    });
    fixture = TestBed.createComponent(AlertasPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
