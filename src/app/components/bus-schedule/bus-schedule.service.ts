import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IBusSchedule, IErrorData } from '../../shared/interfaces/shared.interface';
import { DataService } from '../../shared/services/data/data.service';

import { BUS_SCHEDULE_URL } from '../bus-schedule/bus-schedule.constants';

@Injectable()
export class BusScheduleService {
  constructor(private dataService: DataService<IBusSchedule[]>) {}

  getSchedule(): Observable<IBusSchedule[] | IErrorData> {
    return this.dataService.retrieve(BUS_SCHEDULE_URL);
  }
}
