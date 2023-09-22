import { TestBed } from '@angular/core/testing';

import { IgisokozoService } from './igisokozo.service';

describe('IgisokozoService', () => {
  let service: IgisokozoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IgisokozoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
