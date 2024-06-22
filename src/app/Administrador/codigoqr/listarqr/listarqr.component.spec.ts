import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarqrComponent } from './listarqr.component';

describe('ListarqrComponent', () => {
  let component: ListarqrComponent;
  let fixture: ComponentFixture<ListarqrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarqrComponent]
    });
    fixture = TestBed.createComponent(ListarqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
