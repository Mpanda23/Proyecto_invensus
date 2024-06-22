import { TestBed } from '@angular/core/testing';

import { VentaPlatosService } from './venta-platos.service';

describe('VentaPlatosService', () => {
  let service: VentaPlatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaPlatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
