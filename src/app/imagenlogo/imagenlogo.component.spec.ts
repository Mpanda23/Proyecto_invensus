import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenlogoComponent } from './imagenlogo.component';

describe('ImagenlogoComponent', () => {
  let component: ImagenlogoComponent;
  let fixture: ComponentFixture<ImagenlogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagenlogoComponent]
    });
    fixture = TestBed.createComponent(ImagenlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
