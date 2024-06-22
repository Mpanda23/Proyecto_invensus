import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresBodegueroComponent } from './proveedores-bodeguero.component';

describe('ProveedoresBodegueroComponent', () => {
  let component: ProveedoresBodegueroComponent;
  let fixture: ComponentFixture<ProveedoresBodegueroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedoresBodegueroComponent]
    });
    fixture = TestBed.createComponent(ProveedoresBodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
