import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProplatoComponent } from './editar-proplato.component';

describe('EditarProplatoComponent', () => {
  let component: EditarProplatoComponent;
  let fixture: ComponentFixture<EditarProplatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarProplatoComponent]
    });
    fixture = TestBed.createComponent(EditarProplatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
