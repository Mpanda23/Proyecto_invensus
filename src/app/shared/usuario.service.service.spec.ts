import { TestBed } from '@angular/core/testing';

import { SubcategoriaService } from './subcategoria.service'; // Asegúrate de usar el nombre correcto del servicio

describe('SubcategoriaService', () => {
  let service: SubcategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
