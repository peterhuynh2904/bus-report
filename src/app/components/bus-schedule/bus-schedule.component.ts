import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { IBusSchedule, IErrorData } from '../../shared/interfaces/shared.interface';

import { BusScheduleService } from './bus-schedule.service';

@Component({
  selector: 'app-bus-schedule',
  templateUrl: './bus-schedule.component.html'
})
export class BusScheduleComponent implements OnInit, OnDestroy {
  busScheduleSubscription: Subscription;
  busSchedule: IBusSchedule[];
  alert: IErrorData;

  constructor(private service: BusScheduleService) {}

  ngOnInit(): void {
    this.busScheduleSubscription = this.service.getSchedule().subscribe(
      (data: IBusSchedule[]) => (this.busSchedule = data),
      (error: IErrorData) => (this.alert = error)
    );
  }

  ngOnDestroy(): void {
    if (this.busScheduleSubscription) {
      this.busScheduleSubscription.unsubscribe();
    }
  }
}
