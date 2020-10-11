import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { each } from 'lodash-es';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { IErrorData, ISendNoteResponse } from '../../../shared/interfaces/shared.interface';

import { BusScheduleService } from '../bus-schedule.service';

@Component({
  selector: 'app-bus-schedule-note',
  templateUrl: './bus-schedule-note.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusScheduleNoteComponent implements OnInit, OnDestroy {
  // Ideally we will need some sort of organisation ID to associate with comment, make do with organisation name for now
  @Input() organisation: string;

  noteForm: FormGroup;
  inProgress: boolean;
  alert: IErrorData;
  validationError = 'note.validationError';
  placeholder = 'note.placeholder';
  successAlert: ISendNoteResponse;
  submitNoteSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private service: BusScheduleService, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      note: [null, Validators.required]
    });
  }

  ngOnDestroy(): void {
    if (this.submitNoteSubscription) {
      this.submitNoteSubscription.unsubscribe();
    }
  }

  onSubmit(): void {
    each(this.noteForm.controls, (control) => control.markAsTouched());
    this.alert = null;

    if (!this.noteForm.valid) {
      return;
    }

    this.inProgress = true;
    this.noteForm.disable();
    this.submitNoteSubscription = this.service
      .submitNote(this.noteForm.controls.note.value)
      .pipe(
        finalize(() => {
          this.inProgress = false;
          this.noteForm.enable();
        })
      )
      .subscribe(
        (data: ISendNoteResponse) => {
          this.successAlert = data;
          this.ref.markForCheck();
        },
        (error: IErrorData) => {
          this.alert = error;
          this.ref.markForCheck();
        }
      );
  }
}
