import { TestBed } from '@angular/core/testing';

import { Sucursal3Service } from './sucursal3.service';

describe('Sucursal3Service', () => {
  let service: Sucursal3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sucursal3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
