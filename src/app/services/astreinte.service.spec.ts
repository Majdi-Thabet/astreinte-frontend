import { TestBed } from '@angular/core/testing';

import { AstreinteService } from './astreinte.service';

describe('AstreinteService', () => {
  let service: AstreinteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AstreinteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
