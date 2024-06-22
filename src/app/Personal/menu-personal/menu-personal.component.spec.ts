import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPersonalComponent } from './menu-personal.component';

describe('MenuPersonalComponent', () => {
  let component: MenuPersonalComponent;
  let fixture: ComponentFixture<MenuPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPersonalComponent]
    });
    fixture = TestBed.createComponent(MenuPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
