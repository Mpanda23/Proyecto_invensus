import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editar3JefeinventarioComponent } from './editar3-jefeinventario.component';

describe('Editar3JefeinventarioComponent', () => {
  let component: Editar3JefeinventarioComponent;
  let fixture: ComponentFixture<Editar3JefeinventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Editar3JefeinventarioComponent]
    });
    fixture = TestBed.createComponent(Editar3JefeinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
