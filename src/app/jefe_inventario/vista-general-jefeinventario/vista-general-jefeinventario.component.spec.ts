import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaGeneralJefeinventarioComponent } from './vista-general-jefeinventario.component';

describe('VistaGeneralJefeinventarioComponent', () => {
  let component: VistaGeneralJefeinventarioComponent;
  let fixture: ComponentFixture<VistaGeneralJefeinventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaGeneralJefeinventarioComponent]
    });
    fixture = TestBed.createComponent(VistaGeneralJefeinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
