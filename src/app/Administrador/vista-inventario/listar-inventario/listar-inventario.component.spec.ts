import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInventarioComponent } from './ListarInventarioComponent';

describe('ListarInventarioComponent', () => {
  let component: ListarInventarioComponent;
  let fixture: ComponentFixture<ListarInventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarInventarioComponent]
    });
    fixture = TestBed.createComponent(ListarInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
