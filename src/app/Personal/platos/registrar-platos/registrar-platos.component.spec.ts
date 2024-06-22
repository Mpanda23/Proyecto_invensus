import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPlatosComponent } from './registrar-platos.component';

describe('RegistrarPlatosComponent', () => {
  let component: RegistrarPlatosComponent;
  let fixture: ComponentFixture<RegistrarPlatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPlatosComponent]
    });
    fixture = TestBed.createComponent(RegistrarPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
