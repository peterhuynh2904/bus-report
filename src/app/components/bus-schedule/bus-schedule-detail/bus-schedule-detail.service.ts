import { Injectable } from '@angular/core';

import {
  DEVIATION_EARLY,
  DEVIATION_LATE,
  DEVIATION_ONTIME,
  MAX_DEVIATION_THRESHOLD,
  MIN_DEVIATION_THRESHOLD
} from './bus-schedule-detail.constants';
import { IBusDeviationStatus } from './bus-schedule-detail.interface';

@Injectable()
export class BusScheduleDetailService {
  constructor() {}

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
