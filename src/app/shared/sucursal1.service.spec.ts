import { TestBed } from '@angular/core/testing';

import { Sucursal1Service } from './sucursal1.service';

describe('Sucursal1Service', () => {
  let service: Sucursal1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sucursal1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
