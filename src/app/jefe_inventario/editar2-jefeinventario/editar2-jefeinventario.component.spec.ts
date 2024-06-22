import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editar2JefeinventarioComponent } from './editar2-jefeinventario.component';

describe('Editar2JefeinventarioComponent', () => {
  let component: Editar2JefeinventarioComponent;
  let fixture: ComponentFixture<Editar2JefeinventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Editar2JefeinventarioComponent]
    });
    fixture = TestBed.createComponent(Editar2JefeinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
