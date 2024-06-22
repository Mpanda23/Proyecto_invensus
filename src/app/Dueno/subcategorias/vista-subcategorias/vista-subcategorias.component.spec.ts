import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSubcategoriasComponent } from './vista-subcategorias.component';

describe('VistaSubcategoriasComponent', () => {
  let component: VistaSubcategoriasComponent;
  let fixture: ComponentFixture<VistaSubcategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaSubcategoriasComponent]
    });
    fixture = TestBed.createComponent(VistaSubcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
