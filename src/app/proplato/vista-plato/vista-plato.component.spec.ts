import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPlatoComponent } from './vista-plato.component';

describe('VistaPlatoComponent', () => {
  let component: VistaPlatoComponent;
  let fixture: ComponentFixture<VistaPlatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaPlatoComponent]
    });
    fixture = TestBed.createComponent(VistaPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
