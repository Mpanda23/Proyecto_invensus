import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPlatosInactivosComponent } from './listar-platos-inactivos.component';

describe('ListarPlatosInactivosComponent', () => {
  let component: ListarPlatosInactivosComponent;
  let fixture: ComponentFixture<ListarPlatosInactivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPlatosInactivosComponent]
    });
    fixture = TestBed.createComponent(ListarPlatosInactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
