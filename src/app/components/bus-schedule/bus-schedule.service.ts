import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IBusSchedule, IErrorData } from '../../shared/interfaces/shared.interface';
import { DataService } from '../../shared/services/data/data.service';

import {
  BUS_SCHEDULE_URL,
  DEVIATION_EARLY,
  DEVIATION_LATE,
  DEVIATION_ONTIME,
  MAX_DEVIATION_THRESHOLD,
  MIN_DEVIATION_THRESHOLD
} from '../bus-schedule/bus-schedule.constants';

import { IBusDeviationStatus } from './bus-schedule.interface';

@Injectable()
export class BusScheduleService {
  constructor(private dataService: DataService<IBusSchedule[]>) {}

  getSchedule(): Observable<IBusSchedule[] | IErrorData> {
    return this.dataService.retrieve(BUS_SCHEDULE_URL);
  }

  getDeviationFromStatus(deviationFromTimetable: number): IBusDeviationStatus {
    // Assumed threshold is 0 to 220
    if (!deviationFromTimetable) {
      return;
    }
    if (deviationFromTimetable < MIN_DEVIATION_THRESHOLD) {
      return DEVIATION_LATE;
    }
    if (deviationFromTimetable > MAX_DEVIATION_THRESHOLD) {
      return DEVIATION_EARLY;
    }
    return DEVIATION_ONTIME;
  }
}
