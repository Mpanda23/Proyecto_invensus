import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editar1JefeinventarioComponent } from './editar1-jefeinventario.component';

describe('Editar1JefeinventarioComponent', () => {
  let component: Editar1JefeinventarioComponent;
  let fixture: ComponentFixture<Editar1JefeinventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Editar1JefeinventarioComponent]
    });
    fixture = TestBed.createComponent(Editar1JefeinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
