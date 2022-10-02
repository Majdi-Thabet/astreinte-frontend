import { TestBed } from '@angular/core/testing';

import { ConfigastreinteService } from './configastreinte.service';

describe('ConfigastreinteService', () => {
  let service: ConfigastreinteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigastreinteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
