import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IBusSchedule, IErrorData, ISendNoteResponse } from '../../shared/interfaces/shared.interface';
import { DataService } from '../../shared/services/data/data.service';

import {
  BUS_SCHEDULE_URL,
  BUS_SEND_NOTE_URL,
  DEVIATION_EARLY,
  DEVIATION_LATE,
  DEVIATION_ONTIME,
  MAX_DEVIATION_THRESHOLD,
  MIN_DEVIATION_THRESHOLD
} from '../bus-schedule/bus-schedule.constants';

import { IBusDeviationStatus } from './bus-schedule.interface';

@Injectable()
export class BusScheduleService {
  constructor(private getDataService: DataService<IBusSchedule[]>, private sendDataService: DataService<ISendNoteResponse>) {}

  getSchedule(): Observable<IBusSchedule[] | IErrorData> {
    return this.getDataService.retrieve(BUS_SCHEDULE_URL);
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

  submitNote(note: string): Observable<ISendNoteResponse | IErrorData> {
    return this.sendDataService.send(BUS_SEND_NOTE_URL, note);
  }
}
