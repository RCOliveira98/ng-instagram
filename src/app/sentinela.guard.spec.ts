import { TestBed, async, inject } from '@angular/core/testing';

import { SentinelaGuard } from './sentinela.guard';

describe('SentinelaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SentinelaGuard]
    });
  });

  it('should ...', inject([SentinelaGuard], (guard: SentinelaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
