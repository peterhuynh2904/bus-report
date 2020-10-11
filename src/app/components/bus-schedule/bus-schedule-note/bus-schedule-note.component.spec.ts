import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { of, throwError } from 'rxjs';

import { CopyMatrixPipeModule } from '../../../shared/pipes/copy-matrix/copy-matrix.module';
import { PipesTestingModule } from '../../../shared/pipes/testing/pipes.testing.module';

import { BusScheduleService } from '../bus-schedule.service';

import { BusScheduleNoteComponent } from './bus-schedule-note.component';

describe('BusScheduleComponent', () => {
  let component: BusScheduleNoteComponent;
  let fixture: ComponentFixture<BusScheduleNoteComponent>;
  let service: BusScheduleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BrowserAnimationsModule, CopyMatrixPipeModule, PipesTestingModule, ReactiveFormsModule],
      declarations: [BusScheduleNoteComponent, BusScheduleNoteComponent],
      providers: [BusScheduleService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusScheduleNoteComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(BusScheduleService);
    component.organisation = 'bus';
  });

  describe('Component', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    describe('on destroy', () => {
      it('should unsubscribe the submit note subscription', () => {
        component.submitNoteSubscription = of({}).subscribe();
        spyOn(component.submitNoteSubscription, 'unsubscribe');
        component.ngOnDestroy();
        expect(component.submitNoteSubscription.unsubscribe).toHaveBeenCalled();
      });
    });

    describe('On Init', () => {
      beforeEach(() => {
        component.ngOnInit();
      });

      it('should not assign note control value by default', () => {
        const noteControl = component.noteForm.controls['note'];
        expect(noteControl.valid).toBeFalsy();
        expect(noteControl.value).toEqual(null);
      });

      describe('submitting the form', () => {
        let spy: jasmine.Spy;
        const setupForm = (isSuccess: boolean, retVal: any) => {
          if (isSuccess) {
            spy = spyOn(service, 'submitNote').and.returnValue(of(retVal));
          } else {
            spy = spyOn(service, 'submitNote').and.returnValue(throwError(retVal));
          }
          expect(component.noteForm.valid).toBeFalsy();
          expect(component.alert).toBeFalsy();
          component.noteForm.controls['note'].setValue('test_note');
          component.onSubmit();
          fixture.detectChanges();
          expect(component.inProgress).toEqual(false);
        };

        it('should NOT submit note when form is invalid', () => {
          spy = spyOn(service, 'submitNote');
          component.onSubmit();
          expect(spy).not.toHaveBeenCalled();
        });

        it('should call submitNote when form is valid', () => {
          setupForm(true, {});
          expect(spy).toHaveBeenCalledWith('test_note');
        });

        it('should return response and assign to successAlert when submitNote success', () => {
          setupForm(true, { code: 'sucess', message: 'success' });
          expect(component.successAlert).toEqual({ code: 'sucess', message: 'success' });
        });

        it('should call return error and assign to alert when submitNote success', () => {
          setupForm(false, { code: 'error', message: 'error' });
          expect(component.alert).toEqual({ code: 'error', message: 'error' });
        });
      });
    });
  });

  describe('View', () => {
    it('should show correct input placeholder', () => {
      fixture.detectChanges();
      const element = fixture.debugElement.nativeElement.querySelector('textarea');
      expect(element.getAttribute('placeholder')).toEqual('fake-copy-matrix__note.placeholder');
    });

    it('should show success alert when available, and HIDE submit note Form', () => {
      component.successAlert = { code: 'success', message: 'success' };
      fixture.detectChanges();
      const element = fixture.debugElement.nativeElement.querySelector('.js-success-alert');
      const formEl = fixture.debugElement.nativeElement.querySelector('form');
      expect(element.textContent).toContain('fake-copy-matrix__success');
      expect(formEl).toBeFalsy();
    });

    it('should show alert when available', () => {
      component.alert = { code: 'error', message: 'error' };
      fixture.detectChanges();
      const element = fixture.debugElement.nativeElement.querySelector('.js-alert');
      expect(element.textContent).toContain('fake-copy-matrix__error');
    });
  });
});
