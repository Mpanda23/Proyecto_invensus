import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaBodegueroComponent } from './vista-bodeguero.component';

describe('VistaBodegueroComponent', () => {
  let component: VistaBodegueroComponent;
  let fixture: ComponentFixture<VistaBodegueroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaBodegueroComponent]
    });
    fixture = TestBed.createComponent(VistaBodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
