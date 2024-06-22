import { TestBed } from '@angular/core/testing';

import { LlegadasSucursal2Service } from './llegadas-sucursal2.service';

describe('LlegadasSucursal2Service', () => {
  let service: LlegadasSucursal2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlegadasSucursal2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
