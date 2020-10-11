import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BUS_SCHEDULE_URL } from '../bus-schedule/bus-schedule.constants';

import { IBusSchedule, IErrorData } from 'src/app/shared/interfaces/shared.interface';
import { DataService } from 'src/app/shared/services/data/data.service';

@Injectable()
export class BusScheduleService {
  constructor(private dataService: DataService<IBusSchedule[]>) {}

  getSchedule(): Observable<IBusSchedule[] | IErrorData> {
    return this.dataService.retrieve(BUS_SCHEDULE_URL);
  }
}
