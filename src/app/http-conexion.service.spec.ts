import { TestBed } from '@angular/core/testing';

import { HttpConexionService } from './http-conexion.service';

describe('HttpConexionService', () => {
  let service: HttpConexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpConexionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
