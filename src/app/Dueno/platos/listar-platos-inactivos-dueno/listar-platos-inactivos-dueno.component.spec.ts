import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPlatosInactivosDuenoComponent } from './listar-platos-inactivos-dueno.component';

describe('ListarPlatosInactivosDuenoComponent', () => {
  let component: ListarPlatosInactivosDuenoComponent;
  let fixture: ComponentFixture<ListarPlatosInactivosDuenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPlatosInactivosDuenoComponent]
    });
    fixture = TestBed.createComponent(ListarPlatosInactivosDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
