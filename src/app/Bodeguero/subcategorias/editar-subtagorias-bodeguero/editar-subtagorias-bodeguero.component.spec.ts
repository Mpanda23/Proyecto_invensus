import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSubtagoriasBodegueroComponent } from './editar-subtagorias-bodeguero.component';

describe('EditarSubtagoriasBodegueroComponent', () => {
  let component: EditarSubtagoriasBodegueroComponent;
  let fixture: ComponentFixture<EditarSubtagoriasBodegueroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSubtagoriasBodegueroComponent]
    });
    fixture = TestBed.createComponent(EditarSubtagoriasBodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
