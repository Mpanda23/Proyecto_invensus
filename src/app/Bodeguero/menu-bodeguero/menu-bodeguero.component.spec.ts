import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBodegueroComponent } from './menu-bodeguero.component';

describe('MenuBodegueroComponent', () => {
  let component: MenuBodegueroComponent;
  let fixture: ComponentFixture<MenuBodegueroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuBodegueroComponent]
    });
    fixture = TestBed.createComponent(MenuBodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
