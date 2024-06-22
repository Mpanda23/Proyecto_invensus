import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlatosPersonalComponent } from './editar-platos.component';

describe('EditarPlatosPersonalComponent', () => {
  let component: EditarPlatosPersonalComponent;
  let fixture: ComponentFixture<EditarPlatosPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPlatosPersonalComponent]
    });
    fixture = TestBed.createComponent(EditarPlatosPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
