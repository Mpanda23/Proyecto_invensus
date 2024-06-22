import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProplatoComponent } from './lista-proplato.component';

describe('ListaProplatoComponent', () => {
  let component: ListaProplatoComponent;
  let fixture: ComponentFixture<ListaProplatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaProplatoComponent]
    });
    fixture = TestBed.createComponent(ListaProplatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
