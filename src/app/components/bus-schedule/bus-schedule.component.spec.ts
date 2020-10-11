import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { of, throwError } from 'rxjs';

import { MOCK_BUS_SCHEDULE_RESPONSE } from '../../shared/constants/shared.constants.spec';
import { CopyMatrixPipeModule } from '../../shared/pipes/copy-matrix/copy-matrix.module';
import { PipesTestingModule } from '../../shared/pipes/testing/pipes.testing.module';

import { BusScheduleDetailComponent } from './bus-schedule-detail/bus-schedule-detail.component';
import { BusScheduleDetailService } from './bus-schedule-detail/bus-schedule-detail.service';
import { BusScheduleComponent } from './bus-schedule.component';
import { BusScheduleService } from './bus-schedule.service';

describe('BusScheduleComponent', () => {
  let component: BusScheduleComponent;
  let fixture: ComponentFixture<BusScheduleComponent>;
  let service: BusScheduleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BrowserAnimationsModule, CopyMatrixPipeModule, PipesTestingModule, MatExpansionModule],
      declarations: [BusScheduleComponent, BusScheduleDetailComponent],
      providers: [BusScheduleService, BusScheduleDetailService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusScheduleComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(BusScheduleService);
    component.ngOnInit();
  });

  describe('Component', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    describe('on destroy', () => {
      it('should unsubscribe the bus schedule subscription', () => {
        spyOn(component.busScheduleSubscription, 'unsubscribe');
        component.ngOnDestroy();
        expect(component.busScheduleSubscription.unsubscribe).toHaveBeenCalled();
      });
    });

    describe('On Init', () => {
      it('should call BusScheduleService getSchedule method', () => {
        spyOn(service, 'getSchedule').and.returnValue(of([]));
        component.ngOnInit();
        expect(service.getSchedule).toHaveBeenCalled();
      });

      it('should assign busSchedule data when getSchedule success', () => {
        spyOn(service, 'getSchedule').and.returnValue(of(MOCK_BUS_SCHEDULE_RESPONSE));
        component.ngOnInit();
        expect(service.getSchedule).toHaveBeenCalled();
        expect(component.busSchedule).toEqual(MOCK_BUS_SCHEDULE_RESPONSE);
        expect(component.alert).toBeFalsy();
      });

      it('should NOT assign busSchedule data and assign Alert when getSchedule fail', () => {
        spyOn(service, 'getSchedule').and.returnValue(throwError({ code: 'test', message: 'test' }));
        component.ngOnInit();
        expect(service.getSchedule).toHaveBeenCalled();
        expect(component.busSchedule).toBeFalsy();
        expect(component.alert).toEqual({ code: 'test', message: 'test' });
      });
    });
  });

  describe('View', () => {
    describe('alert message', () => {
      it('should show alert with correct message when alert object is assigned', () => {
        component.alert = { code: 'test', message: 'test' };
        fixture.detectChanges();
        const element = fixture.debugElement.nativeElement;
        expect(element.querySelector('.js-alert').textContent).toContain('fake-copy-matrix__test');
      });

      it('should show BusScheduleDetailComponent when busSchedule data populated', () => {
        component.busSchedule = MOCK_BUS_SCHEDULE_RESPONSE;
        fixture.detectChanges();
        const componentEls = fixture.debugElement.queryAll(By.css('app-bus-schedule-detail'));
        expect(componentEls.length).toEqual(MOCK_BUS_SCHEDULE_RESPONSE.length);
      });
    });
  });
});
