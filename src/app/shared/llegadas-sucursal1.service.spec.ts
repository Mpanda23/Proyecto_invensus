import { TestBed } from '@angular/core/testing';

import { LlegadasSucursal1Service } from './llegadas-sucursal1.service';

describe('LlegadasSucursal1Service', () => {
  let service: LlegadasSucursal1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlegadasSucursal1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
