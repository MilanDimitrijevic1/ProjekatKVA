import { TestBed } from '@angular/core/testing';

import { OdecaService } from './odeca.service';

describe('OdecaService', () => {
  let service: OdecaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdecaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
