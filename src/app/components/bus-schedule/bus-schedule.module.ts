import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CopyMatrixPipeModule } from '../../shared/pipes/copy-matrix/copy-matrix.module';
import { DataModule } from '../../shared/services/data/data.module';

import { BusScheduleDetailComponent } from './bus-schedule-detail/bus-schedule-detail.component';
import { BusScheduleComponent } from './bus-schedule.component';
import { BusScheduleService } from './bus-schedule.service';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, DataModule, CopyMatrixPipeModule, MatExpansionModule],
  declarations: [BusScheduleComponent, BusScheduleDetailComponent],
  providers: [BusScheduleService],
  exports: [BusScheduleComponent]
})
export class BusScheduleModule {}
