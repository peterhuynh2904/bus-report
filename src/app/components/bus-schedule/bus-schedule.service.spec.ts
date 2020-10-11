import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { of, throwError } from 'rxjs';

import { MOCK_BUS_SCHEDULE_RESPONSE } from '../../shared/constants/shared.constants.spec';
import { IBusSchedule } from '../../shared/interfaces/shared.interface';
import { DataService } from '../../shared/services/data/data.service';

import { BUS_SCHEDULE_URL } from './bus-schedule.constants';
import { BusScheduleService } from './bus-schedule.service';

describe('BusScheduleService', () => {
  let service: BusScheduleService;
  let dataService: DataService<IBusSchedule[]>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BusScheduleService]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(BusScheduleService);
    dataService = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getSchedule method', () => {
    it('should call DataService Retrieve with correct Url', () => {
      spyOn(dataService, 'retrieve').and.returnValue(of(null));
      service.getSchedule().subscribe();
      expect(dataService.retrieve).toHaveBeenCalledWith(BUS_SCHEDULE_URL);
    });

    it('should return correct data when success', () => {
      spyOn(dataService, 'retrieve').and.returnValue(of(MOCK_BUS_SCHEDULE_RESPONSE));
      let response;
      service.getSchedule().subscribe((res) => (response = res));
      expect(response).toEqual(MOCK_BUS_SCHEDULE_RESPONSE);
    });

    it('should return error data when failure', () => {
      spyOn(dataService, 'retrieve').and.returnValue(
        throwError({ code: 'error.technical', message: 'We have encountered a technical error' })
      );
      let error;
      service.getSchedule().subscribe(
        (res) => {},
        (err) => (error = err)
      );
      expect(error).toEqual({ code: 'error.technical', message: 'We have encountered a technical error' });
    });
  });
});
