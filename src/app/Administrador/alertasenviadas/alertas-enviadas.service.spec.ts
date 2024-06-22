import { TestBed } from '@angular/core/testing';

import { AlertasEnviadasService } from './alertas-enviadas.service';

describe('AlertasEnviadasService', () => {
  let service: AlertasEnviadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertasEnviadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
