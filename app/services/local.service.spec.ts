import { TestBed,inject } from '@angular/core/testing';

import { LocalService } from './local.service';



describe('ServiceLocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalService]
    });
  });

  it('should be created', inject([LocalService], (service: LocalService) => {
    expect(service).toBeTruthy();
  }));
});