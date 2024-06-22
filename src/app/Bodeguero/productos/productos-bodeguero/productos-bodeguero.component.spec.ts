import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosBodegueroComponent } from './productos-bodeguero.component';

describe('ProductosBodegueroComponent', () => {
  let component: ProductosBodegueroComponent;
  let fixture: ComponentFixture<ProductosBodegueroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosBodegueroComponent]
    });
    fixture = TestBed.createComponent(ProductosBodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
