import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProductosBodegueroComponent } from './editar-productos-bodeguero.component';

describe('EditarProductosBodegueroComponent', () => {
  let component: EditarProductosBodegueroComponent;
  let fixture: ComponentFixture<EditarProductosBodegueroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarProductosBodegueroComponent]
    });
    fixture = TestBed.createComponent(EditarProductosBodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
