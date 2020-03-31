import {TestBed} from '@angular/core/testing';

import {GamesService} from './games.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('GamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', () => {
    const service: GamesService = TestBed.inject(GamesService);
    expect(service).toBeTruthy();
  });
});
