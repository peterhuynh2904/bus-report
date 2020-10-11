import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BusScheduleModule } from './components/bus-schedule/bus-schedule.module';
import { COPY_MATRIX_MAPPING } from './shared/constants/copy-matrix.constant';
import { IAppSettings } from './shared/interfaces/shared.interface';
import { CopyMatrixPipeModule } from './shared/pipes/copy-matrix/copy-matrix.module';
import { COPY_MATRIX } from './shared/tokens/tokens';

const getAppSettings = (): IAppSettings => ({ language: 'eng' });

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BusScheduleModule, CopyMatrixPipeModule],
  providers: [{ provide: COPY_MATRIX, useValue: COPY_MATRIX_MAPPING[getAppSettings().language] }],
  bootstrap: [AppComponent]
})
export class AppModule {}
