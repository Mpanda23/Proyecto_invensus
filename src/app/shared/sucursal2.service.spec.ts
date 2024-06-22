import { TestBed } from '@angular/core/testing';

import { Sucursal2Service } from './sucursal2.service';

describe('Sucursal2Service', () => {
  let service: Sucursal2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sucursal2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
