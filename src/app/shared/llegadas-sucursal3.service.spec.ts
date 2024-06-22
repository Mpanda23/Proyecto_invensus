import { TestBed } from '@angular/core/testing';

import { LlegadasSucursal3Service } from './llegadas-sucursal3.service';

describe('LlegadasSucursal3Service', () => {
  let service: LlegadasSucursal3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlegadasSucursal3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
