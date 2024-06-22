import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDuenoComponent } from './vista-dueno.component';

describe('VistaDuenoComponent', () => {
  let component: VistaDuenoComponent;
  let fixture: ComponentFixture<VistaDuenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaDuenoComponent]
    });
    fixture = TestBed.createComponent(VistaDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
