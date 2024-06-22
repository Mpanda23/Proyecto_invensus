import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasBodegueroComponent } from './categorias-bodeguero.component';

describe('CategoriasBodegueroComponent', () => {
  let component: CategoriasBodegueroComponent;
  let fixture: ComponentFixture<CategoriasBodegueroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriasBodegueroComponent]
    });
    fixture = TestBed.createComponent(CategoriasBodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
