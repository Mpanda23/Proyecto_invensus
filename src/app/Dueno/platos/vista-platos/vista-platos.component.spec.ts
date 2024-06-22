import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPlatosComponent } from './vista-platos.component';

describe('VistaPlatosComponent', () => {
  let component: VistaPlatosComponent;
  let fixture: ComponentFixture<VistaPlatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaPlatosComponent]
    });
    fixture = TestBed.createComponent(VistaPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
