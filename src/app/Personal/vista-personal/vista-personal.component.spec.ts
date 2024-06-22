import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPersonalComponent } from './vista-personal.component';

describe('VistaPersonalComponent', () => {
  let component: VistaPersonalComponent;
  let fixture: ComponentFixture<VistaPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaPersonalComponent]
    });
    fixture = TestBed.createComponent(VistaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
