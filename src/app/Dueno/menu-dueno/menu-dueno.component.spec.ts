import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDuenoComponent } from './menu-dueno.component';

describe('MenuDuenoComponent', () => {
  let component: MenuDuenoComponent;
  let fixture: ComponentFixture<MenuDuenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuDuenoComponent]
    });
    fixture = TestBed.createComponent(MenuDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
