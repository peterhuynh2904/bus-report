import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BusScheduleService } from '../service/bus-schedule.service';

import { BusScheduleComponent } from './bus-schedule.component';

import { CopyMatrixPipeModule } from 'src/app/shared/pipes/copy-matrix/copy-matrix.module';
import { DataModule } from 'src/app/shared/services/data/data.module';

@NgModule({
  declarations: [BusScheduleComponent],
  imports: [CommonModule, DataModule, CopyMatrixPipeModule],
  providers: [BusScheduleService],
  exports: [BusScheduleComponent]
})
export class BusScheduleModule {}
