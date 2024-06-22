import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlatosComponent } from './editar-platos.component';

describe('EditarPlatosComponent', () => {
  let component: EditarPlatosComponent;
  let fixture: ComponentFixture<EditarPlatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPlatosComponent]
    });
    fixture = TestBed.createComponent(EditarPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
