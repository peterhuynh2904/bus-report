import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DEVIATION_EARLY, DEVIATION_LATE, DEVIATION_ONTIME } from './bus-schedule-detail.constants';
import { BusScheduleDetailService } from './bus-schedule-detail.service';

describe('BusScheduleDetailService', () => {
  let service: BusScheduleDetailService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BusScheduleDetailService]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(BusScheduleDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getDeviationFromStatus method', () => {
    it('should return nothing when deviationFromTimetable is not provided', () => {
      const result = service.getDeviationFromStatus(undefined);
      expect(result).toBeFalsy();
    });

    it('should return deviation date for late service', () => {
      const result = service.getDeviationFromStatus(-900);
      expect(result).toEqual(DEVIATION_LATE);
    });

    it('should return deviation date for ontime service', () => {
      const result = service.getDeviationFromStatus(100);
      expect(result).toEqual(DEVIATION_ONTIME);
    });

    it('should return deviation date for early service', () => {
      const result = service.getDeviationFromStatus(1000);
      expect(result).toEqual(DEVIATION_EARLY);
    });
  });
});
