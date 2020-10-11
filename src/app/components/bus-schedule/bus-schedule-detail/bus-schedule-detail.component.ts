import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { IBusData, IBusSchedule } from '../../../shared/interfaces/shared.interface';

import { IBusDataExtended } from './bus-schedule-detail.interface';
import { BusScheduleDetailService } from './bus-schedule-detail.service';

@Component({
  selector: 'app-bus-schedule-detail',
  templateUrl: './bus-schedule-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusScheduleDetailComponent implements OnInit {
  @Input() busSchedule: IBusSchedule;

  extendedBusData: IBusDataExtended[];

  content = {
    busId: 'schedule.table.busId',
    variant: 'schedule.table.variant',
    status: 'schedule.table.status'
  };

  constructor(private service: BusScheduleDetailService) {}

  ngOnInit(): void {
    this.extendedBusData = this.busSchedule.busData.map((data: IBusData) => {
      return {
        ...data,
        variantLabel: data.routeVariant.replace(/([^\s]+)/, (str) => `<b>${str}</b>`),
        deviation: this.service.getDeviationFromStatus(data.deviationFromTimetable)
      };
    });
  }
}
