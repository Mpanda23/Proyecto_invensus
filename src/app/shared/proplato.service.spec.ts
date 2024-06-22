import { TestBed } from '@angular/core/testing';

import { ProplatoService } from './proplato.service';

describe('ProplatoService', () => {
  let service: ProplatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProplatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
