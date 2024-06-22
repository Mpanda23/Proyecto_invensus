import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriasBodegueroComponent } from './subcategorias-bodeguero.component';

describe('SubcategoriasBodegueroComponent', () => {
  let component: SubcategoriasBodegueroComponent;
  let fixture: ComponentFixture<SubcategoriasBodegueroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcategoriasBodegueroComponent]
    });
    fixture = TestBed.createComponent(SubcategoriasBodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
