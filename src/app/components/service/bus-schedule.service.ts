import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { IErrorData } from 'src/app/shared/interfaces/shared.interface';
import { DataService } from 'src/app/shared/services/data/data.service';

import { BUS_SCHEDULE_URL } from '../bus-schedule/bus-schedule.constants';

import { IBusSchedule } from '../bus-schedule/bus-schedule.interface';

@Injectable()
export class BusScheduleService {
  constructor(private dataService: DataService<IBusSchedule[]>) { }

  getSchedule(): Observable<IBusSchedule[] | IErrorData> {
    return this.dataService.retrieve(BUS_SCHEDULE_URL);
  }
}